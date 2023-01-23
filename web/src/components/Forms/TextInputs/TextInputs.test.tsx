import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { TextInput, IInputProps } from './TextInputs'

const renderTextComponent = (props: IInputProps, formProps = {}) =>
  render(
    <Form {...formProps}>
      <TextInput {...props} />
    </Form>
  )
const renderPasswordComponent = (props: IInputProps, formProps = {}) =>
  render(
    <Form {...formProps}>
      <TextInput {...props} />
    </Form>
  )

describe('Text input', () => {
  it('shows a label if you give an input the label prop', () => {
    renderTextComponent({
      name: 'foobar',
    })
    renderPasswordComponent({
      name: 'password',
    })

    // get element by label
    expect(screen.queryByRole('label')).not.toBeInTheDocument()

    renderTextComponent({
      name: 'foo',
      label: 'baz',
    })
    expect(screen.getByLabelText('baz')).toBeInTheDocument()

    renderPasswordComponent({
      name: 'baz',
      label: 'bar',
    })
    expect(screen.getByLabelText('bar')).toBeInTheDocument()
  })
})
