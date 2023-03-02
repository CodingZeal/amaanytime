import type { ComponentMeta } from '@storybook/react'

import { UserQuestions } from './UserQuestions'

export const generated = () => {
  return <UserQuestions questions={[]} className={undefined} />
}

export default {
  title: 'Components/UserQuestions',
  component: UserQuestions,
} as ComponentMeta<typeof UserQuestions>
