import type { ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'

export const generated = () => {
  return (
    <Avatar
      user={{
        name: '',
        avatar: '',
      }}
    />
  )
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>
