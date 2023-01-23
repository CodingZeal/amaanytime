import type { PlaywrightTestConfig, Project } from '@playwright/test'
import { devices } from '@playwright/test'

const LOCAL_WORKERS = 1

export const BASE_URL = 'http://localhost:8910'

const AVAIL_BROWSERS = {
  firefox: {
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
    },
  },
  chrome: {
    name: 'chrome',
    use: {
      ...devices['Desktop Chrome'],
    },
  },
  webkit: {
    name: 'webkit',
    use: {
      ...devices['Desktop Safari'],
    },
  },
}

const BROWSERS_TO_RUN = process.env.BROWSERS?.split(',')
  .map((arg) => {
    if (arg === '--firefox') {
      return AVAIL_BROWSERS.firefox
    }
    if (arg === '--chrome') {
      return AVAIL_BROWSERS.chrome
    }
    if (arg === '--webkit') {
      return AVAIL_BROWSERS.webkit
    }
  })
  .filter(Boolean) as Project[]

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./playwright.setup.ts'),
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : LOCAL_WORKERS,
  reporter: 'html',
  use: {
    actionTimeout: 15 * 1000,
    trace: 'on-first-retry',
    baseURL: BASE_URL,
  },
  projects: BROWSERS_TO_RUN?.length
    ? BROWSERS_TO_RUN
    : Object.entries(AVAIL_BROWSERS).map(([_, project]) => project),
  webServer: {
    command: 'yarn rw serve',
    port: 8910,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    env: {
      DISABLE_EMAIL: 'true',
    },
  },
}

export default config
