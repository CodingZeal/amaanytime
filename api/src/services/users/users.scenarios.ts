import { Prisma } from '@prisma/client'

const DEFAULT_FIELDS = {
  hashedPassword: 'xxxx',
  salt: 'pepper',
}

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String4589593',
        username: 'exampleuser',
        verifyToken: 'HarryPotter',
        active: true,
        ...DEFAULT_FIELDS,
      },
    },
    two: {
      data: {
        email: 'String1300967',
        username: 'exampleuser2',
        active: false,
        ...DEFAULT_FIELDS,
      },
    },
  },
})

export const associations = {
  role: {
    role1: (): Prisma.RoleCreateArgs => ({
      data: {
        name: 'Role1',
      },
    }),
  },
  team: {
    team1: (): Prisma.TeamCreateArgs => ({
      data: {
        name: 'Team1',
      },
    }),
  },
  user: {
    withTeam: (): Prisma.UserCreateArgs => ({
      data: {
        email: 'teamUser@example.com',
        username: 'teamUser',
        ...DEFAULT_FIELDS,
      },
    }),
    withoutTeam: (): Prisma.UserCreateArgs => ({
      data: {
        email: 'noTeamUser@example.com',
        username: 'noTeamUser',
        ...DEFAULT_FIELDS,
      },
    }),
  },
  membership: {
    membership1: (scenario): Prisma.MembershipCreateArgs => ({
      data: {
        teamId: scenario.team.team1.id,
        userId: scenario.user.withTeam.id,
      },
    }),
  },
  membershipRole: {
    membershipRole1: (scenario): Prisma.MembershipRoleCreateArgs => ({
      data: {
        membershipId: scenario.membership.membership1.id,
        roleId: scenario.role.role1.id,
      },
    }),
  },
  question: {
    question1: (scenario): Prisma.QuestionCreateArgs => ({
      data: {
        question: 'String',
        answer: 'Example Answer',
        askedByUserId: scenario.user.withTeam.id,
        answeredByUserId: scenario.user.withoutTeam.id,
      },
    }),
  },
}

export type StandardScenario = typeof standard
export type AssociationsScenario = {
  role: Record<string, Prisma.RoleCreateArgs['data']>
  team: Record<string, Prisma.TeamCreateArgs['data']>
  user: Record<string, Prisma.UserCreateArgs['data']>
  question: Record<string, Prisma.QuestionCreateArgs['data']>
}
