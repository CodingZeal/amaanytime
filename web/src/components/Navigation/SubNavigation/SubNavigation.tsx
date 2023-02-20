const SubNavigation = ({ children, className }) => (
  <ul data-testid="admin-nav" className={`my-3 ${className}`}>
    {children}
  </ul>
)

export { SubNavigation }
