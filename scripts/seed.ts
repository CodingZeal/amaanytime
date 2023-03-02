// template[tags(prisma,db)]
import { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import Chance from 'chance'
import CryptoJS from 'crypto-js'

export function hashPassword(password: string, salt = 'ZEAL') {
  const saltToUse = salt || CryptoJS.lib.WordArray.random(128 / 8).toString()
  return [
    CryptoJS.PBKDF2(password, saltToUse, { keySize: 256 / 32 }).toString(),
    saltToUse,
  ]
}

const {
  ADMIN_USERNAME = 'admin',
  ADMIN_EMAIL = 'admin@example.com',
  ADMIN_PASSWORD = 'password',
  USERS_PASSWORD = 'password',
} = process.env

const [ADMIN_HASHED_PASSWORD, ADMIN_SALT] = hashPassword(ADMIN_PASSWORD)
const [USERS_HASHED_PASSWORD, USERS_SALT] = hashPassword(USERS_PASSWORD)

const chance = new Chance('ZEAL')

function pickRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateUser(
  override?: Prisma.UserCreateInput
): Prisma.UserCreateInput {
  return {
    email: chance.email(),
    hashedPassword: USERS_HASHED_PASSWORD,
    name: chance.name(),
    nickname: chance.word({ syllables: 1 }),
    pronouns: pickRandom(['he/him', 'she/her', 'they/them', 'it/its']),
    salt: USERS_SALT,
    username: chance.word({ syllables: 2 }),
    avatar: chance.avatar({ protocol: 'https' }),
    ...override,
  }
}

function generateTeam(
  override?: Prisma.UserCreateInput
): Prisma.UserCreateInput {
  return {
    name: chance.company(),
    ...override,
  }
}

async function _upsertUser(user) {
  return db.user.upsert({
    where: {
      email: user.email,
    },
    update: {
      ...user,
    },
    create: {
      ...user,
    },
  })
}

async function _createTeam(team) {
  return db.team.create({
    data: {
      ...team,
    },
  })
}

async function _createRole(role) {
  return db.role.create({
    data: {
      name: role,
    },
  })
}

async function generateQuestions(user) {
  return db.question.create({
    data: {
      question: chance.sentence() + '?',
      askedBy: {
        connect: {
          id: user.id,
        },
      },
      askedOf: {
        connect: {
          id: user.id,
        },
      },
    },
  })
}

export default async () => {
  try {
    const hasUsers = await db.user.findMany()
    if (hasUsers.length) {
      console.log('Has database already been seeded?')
      return
    }
    const usersData = [...Array(9).fill({}).map(generateUser)]
    const users = await Promise.all(usersData.map(_upsertUser))

    const teamsData = [...Array(5).fill({}).map(generateTeam)]
    const teams = await Promise.all(teamsData.map(_createTeam))

    users.map((user) => generateQuestions(user))

    await db.user.create({
      data: {
        admin: true,
        email: ADMIN_EMAIL,
        hashedPassword: ADMIN_HASHED_PASSWORD,
        salt: ADMIN_SALT,
        username: ADMIN_USERNAME,
      },
    })

    await db.user.create({
      data: {
        email: 'user@example.com',
        hashedPassword: ADMIN_HASHED_PASSWORD,
        salt: ADMIN_SALT,
        username: 'user',
      },
    })

    const rolesData = ['Admin', 'Editor', 'Viewer']
    const roles = await Promise.all(rolesData.map(_createRole))

    for (const user of users) {
      const team = teams[(teams.length * Math.random()) | 0]
      const membership = await db.membership.upsert({
        where: {
          userTeamConstraint: {
            userId: user.id,
            teamId: team.id,
          },
        },
        create: {
          teamId: team.id,
          userId: user.id,
        },
        update: {
          teamId: team.id,
        },
      })
      const role = roles[(roles.length * Math.random()) | 0]
      await db.membershipRole.create({
        data: {
          membershipId: membership.id,
          roleId: role.id,
        },
      })
    }

    return null
  } catch (err) {
    console.error(err.message)
    return process.exit(1)
  }
}
