import type { ComponentMeta } from '@storybook/react'

import { UserProfile } from './UserProfile'

export const generated = () => {
  return <UserProfile user={''} />
}

export default {
  title: 'Components/UserProfile',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>
