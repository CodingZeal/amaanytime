import type { ComponentMeta } from '@storybook/react'

import UserProfilePage from './UserProfilePage'

export const generated = () => {
  return <UserProfilePage id={''} />
}

export default {
  title: 'Pages/UserProfilePage',
  component: UserProfilePage,
} as ComponentMeta<typeof UserProfilePage>
