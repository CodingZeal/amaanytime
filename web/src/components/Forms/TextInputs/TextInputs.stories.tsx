import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import { AmaTextField } from './TextInputs'

const Template: ComponentStory<typeof AmaTextField> = (args) => (
  <AmaTextField {...args} />
)

export const Errored = Template.bind({})

Errored.args = {
  label: 'username',
  value: '',
  name: 'username',
  decorators: [(Story) => <Form onSubmit={() => {}}>{Story}</Form>],
}

export const Default = Template.bind({})

Default.args = {
  label: 'username',
  value: '',
  name: 'username',
}

export default {
  title: 'Form/AmaTextField',
  component: AmaTextField,
  decorators: [
    (Story) => (
      <Form>
        <Story />
      </Form>
    ),
  ],
} as ComponentMeta<typeof AmaTextField>
