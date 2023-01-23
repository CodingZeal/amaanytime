export const ActionButton = ({
  children,
  style,
  type = 'button',
  ...rest
}: {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  style?: React.CSSProperties
}) => (
  <button
    type={type}
    style={style}
    className="mb-6 min-h-[40px] min-w-[120px] rounded-2xl bg-punch p-2 font-slab text-sm text-white md:mb-0 md:p-2"
    {...rest}
  >
    {children}
  </button>
)
