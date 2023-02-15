export const ActionButton = ({
  children,
  loading,
  style,
  type = 'button',
  ...rest
}: {
  children: React.ReactNode
  loading?: boolean
  type?: 'submit' | 'reset' | 'button'
  style?: React.CSSProperties
}) => (
  <button
    disabled={loading}
    name={'name'}
    type={type}
    style={style}
    className="mb-6 min-h-[40px] min-w-[120px] rounded-3xl bg-punch p-2 font-slab text-base text-white md:mb-0 md:p-2"
    {...rest}
  >
    {children}
  </button>
)
