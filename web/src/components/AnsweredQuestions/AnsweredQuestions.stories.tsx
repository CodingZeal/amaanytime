import type { ComponentMeta } from '@storybook/react'

import { AnsweredQuestions } from './AnsweredQuestions'

export const generated = () => {
  return <AnsweredQuestions questions={undefined} />
}

export default {
  title: 'Components/AnsweredQuestions',
  component: AnsweredQuestions,
} as ComponentMeta<typeof AnsweredQuestions>
