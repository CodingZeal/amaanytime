import type { ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'

export const generated = () => {
  return <Avatar alt={''} />
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>
