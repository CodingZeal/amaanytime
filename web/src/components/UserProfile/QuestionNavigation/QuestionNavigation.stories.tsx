import type { ComponentMeta } from '@storybook/react'

import { QuestionNavigation } from './QuestionNavigation'

export const generated = () => {
  return <QuestionNavigation currentTab={''} onTabChange={() => {}} />
}

export default {
  title: 'Components/QuestionNavigation',
  component: QuestionNavigation,
} as ComponentMeta<typeof QuestionNavigation>
