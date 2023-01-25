import { routes } from '@redwoodjs/router'

import { LinkItem } from 'src/components/Navigation/LinkItem/LinkItem'
import { SubNavigation } from 'src/components/Navigation/SubNavigation'

type ProfileLayoutProps = {
  children?: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className="flex">
      <div className="hidden w-60 font-slab lg:block lg:border-r-2">
        <SubNavigation>
          <LinkItem to={routes.editPassword()}>Edit Password</LinkItem>
          <LinkItem to={routes.editEmail()}>Edit Email</LinkItem>
          <LinkItem to={routes.profile()}>Edit Profile</LinkItem>
        </SubNavigation>
      </div>
      <div className="mb-10 flex-1">
        <main>{children}</main>
      </div>
    </div>
  )
}

export { ProfileLayout }
