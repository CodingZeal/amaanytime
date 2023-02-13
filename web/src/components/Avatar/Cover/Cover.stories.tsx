import type { ComponentMeta } from '@storybook/react'

import { Cover } from './Cover'

export const generated = () => {
  return <Cover name={''} />
}

export default {
  title: 'Components/Cover',
  component: Cover,
} as ComponentMeta<typeof Cover>
