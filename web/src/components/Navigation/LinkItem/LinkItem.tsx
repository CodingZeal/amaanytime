import { NavLink } from '@redwoodjs/router'

const LinkItem = ({ children, ...props }) => {
  const { to, ...rest } = props
  return (
    <li data-testid="admin__link-item" className="mx-3 cursor-pointer py-4">
      <NavLink activeClassName="bg-ulcaGold" to={to} {...rest}>
        {children}
      </NavLink>
    </li>
  )
}

export { LinkItem }
