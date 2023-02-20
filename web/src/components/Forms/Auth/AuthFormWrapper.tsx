import { Form } from '@redwoodjs/forms'

import { useDevice } from 'src/hooks/useDevice'

export const AuthFormWrapper = ({
  children,
  handleSubmit,
  ...rest
}: {
  children: React.ReactNode
  handleSubmit: (data: Record<string, unknown>) => void
}) => {
  const { isIPad, isDesktop } = useDevice()
  return (
    <Form
      name="form"
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: isDesktop ? '' : '1px solid black',
        padding: isIPad ? '40px' : '60px 1rem 1rem 0.6rem',
        marginBottom: 5,
        gap: isIPad ? '1.6em' : '0.8em',
      }}
      className="w-5/6"
      {...rest}
    >
      {children}
    </Form>
  )
}
