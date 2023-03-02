import type { ComponentMeta } from '@storybook/react'

import { UnansweredQuestions } from './UnansweredQuestions'

export const generated = () => {
  return <UnansweredQuestions questions={undefined} />
}

export default {
  title: 'Components/UnansweredQuestions',
  component: UnansweredQuestions,
} as ComponentMeta<typeof UnansweredQuestions>
