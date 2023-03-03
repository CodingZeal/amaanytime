import type { Prisma, Question } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'String',
        answered: false,
        askedBy: {
          create: {
            username: 'String5271824',
            email: 'String1236356',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-12-28T18:55:10.851Z',
          },
        },
        askedOf: {
          create: {
            username: 'String9554943',
            email: 'String7908813',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-12-28T18:55:10.851Z',
          },
        },
      },
    },
    two: {
      data: {
        question: 'String',
        answer: 'AnsweredQuestion1',
        answered: true,
        askedBy: {
          create: {
            username: 'String4015156',
            email: 'String6554127',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-12-28T18:55:10.851Z',
          },
        },
        askedOf: {
          create: {
            username: 'String9660856',
            email: 'String686936',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-12-28T18:55:10.851Z',
          },
        },
      },
    },
    three: {
      data: {
        question: 'String',
        answer: 'AnsweredQuestion2',
        answered: true,
        askedBy: {
          create: {
            username: 'String402497',
            email: 'String6543984',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-12-29T18:09:40.569Z',
          },
        },
        askedOf: {
          create: {
            username: 'String968728',
            email: 'String68328992',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-12-29T18:09:40.569Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Question, 'question'>
