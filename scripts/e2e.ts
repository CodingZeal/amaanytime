#!/usr/bin/env ts-node

/*
  --debug = Run in debug mode
  --skip-build = Skip the build step
  --skip-setup = Skip all primsa db commands (migrate, seed)
  --firefox = Run in firefox
  --chrome = Run in chrome
  --webkit = Run in webkit/safari

  You can combine the browsers or leave blank to run them all
  ex:
  yarn test:e2e --firefox --chrome

  Any additional flags get passed to playwright
  ex:
  yarn test:e2e mytest.spec.ts --headed --firefox
*/

import { spawn } from 'child_process'
import dotenv from 'dotenv'

dotenv.config()

const BASE_DB_URL = 'postgresql://amauser:amapass@localhost:5432'

process.env.DATABASE_URL = `${BASE_DB_URL}/ama_test`

const ARGS = process.argv.slice(2)

const BASE_PLAYWRIGHT_COMMAND =
  'npx playwright test -c web/playwright.config.ts --trace on --reporter=list'

const { DATABASE_URL, CI } = process.env

const run = async () => {
  // we expect a couple errors so we'll try again twice
  let attemps = 0
  try {
    if (attemps >= 2) {
      console.error('Failed too many times. Run with --debug')
      process.exit(1)
    }
    if (CI || ARGS.includes('--ci')) {
      await _spawn(BASE_PLAYWRIGHT_COMMAND)
      return
    }

    if (ARGS.includes('--debug')) console.log(`DATABASE_URL: ${DATABASE_URL}`)

    await _spawn('docker compose up -d')

    if (!ARGS.includes('--skip-setup')) {
      await _spawn(
        `docker compose exec db psql ${BASE_DB_URL} -c "drop database ama_test;"`
      )
      await _spawn('yarn rw prisma migrate dev')
    }

    if (!ARGS.includes('--skip-build')) {
      await _spawn('yarn rw build')
    }

    await _spawnPlaywright()
  } catch (err) {
    attemps++
    await _spawn(
      `docker compose exec db psql ${BASE_DB_URL} -c "create database ama_test;"`
    )
    return run()
  }
}

async function _spawnPlaywright() {
  try {
    const firefoxArgs = ARGS.filter((arg) => arg === '--firefox')
    const chromeArgs = ARGS.filter((arg) => arg === '--chrome')
    const webkitArgs = ARGS.filter((arg) => arg === '--webkit')

    // Remove the browsers and our args from the playwright specific args
    const playwrightArgs = ARGS.filter(
      (arg) =>
        !firefoxArgs.includes(arg) &&
        !chromeArgs.includes(arg) &&
        !webkitArgs.includes(arg) &&
        !['--skip-setup', '--skip-build', '--ci'].includes(arg)
    ).join(' ')

    const browsers = [...firefoxArgs, ...chromeArgs, ...webkitArgs].join(',')
    const hasBrowserArgs = browsers.length > 0

    const commandWithArgs = `${BASE_PLAYWRIGHT_COMMAND} ${playwrightArgs}`
    const commandWithBrowsers = hasBrowserArgs
      ? `BROWSERS=${browsers} ${commandWithArgs}`
      : commandWithArgs
    const commandWithDebug = ARGS.includes('--debug')
      ? `DEBUG=pw:webserver ${commandWithBrowsers}`
      : commandWithBrowsers

    ARGS.includes('--debug') &&
      console.log(`Running Command:: ${commandWithDebug}`)

    await _spawn(commandWithDebug)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

async function _spawn(command: string, opts?: any) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      shell: '/bin/bash',
      ...opts,
    })

    child.stdout.on('data', (data) => {
      process.stdout.write(data.toString())
    })

    child.stderr.on('data', (data) => {
      console.error(data.toString())
    })

    child.on('close', (code) => {
      if (code === 0) {
        resolve(true)
      } else {
        reject(new Error(`Command failed with code ${code}`))
      }
    })
  })
}

run().then(console.log).catch(console.error)
