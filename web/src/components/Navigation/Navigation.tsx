import { useState } from 'react'

import { NavLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { useDevice } from 'src/hooks/useDevice'

import { Avatar } from '../Avatar/Avatar'
import {
  AMAMobile,
  Arrow,
  BgProfile,
  HomeIcon,
  NavHome,
  OrangeStar,
  RetroLogoLayerSvg,
} from '../Svgs'

import { AvatarMenu } from './AvatarMenu/AvatarMenu'

const LinkItem = (props) => (
  <NavLink
    data-testid="nav__link-item"
    className="mr-3 cursor-pointer"
    {...props}
  >
    {props.children}
  </NavLink>
)
const Navigation = () => {
  const { isIPad, isMobile } = useDevice()

  if (isMobile || isIPad) {
    return (
      <div data-testid="nav" className="static mr-auto w-full">
        <MobileView />
      </div>
    )
  }

  return (
    <>
      <div data-testid="nav" className="static mr-auto w-[345px]">
        <DeskView />
      </div>
    </>
  )
}

const MobileView = () => {
  const { currentUser, isAuthenticated } = useAuth()

  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)
  return (
    <div className="relative">
      <div className="fixed flex h-16 w-screen items-center bg-black">
        {isAuthenticated && (
          <button
            onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
            className="items-center"
          >
            <Avatar
              user={currentUser}
              className="ml-5 h-[44px] w-[44px] border-4 border-punch bg-punch"
            />
          </button>
        )}
        <LinkItem
          to={isAuthenticated ? routes.home() : routes.login()}
          className="mx-auto"
        >
          <AMAMobile />
        </LinkItem>
      </div>
      {isAuthenticated && (
        <AvatarMenu
          isOpen={isAvatarMenuOpen}
          toggleOpen={setIsAvatarMenuOpen}
        />
      )}
      <div className="fixed bottom-0 flex h-20 w-screen items-center justify-center bg-black">
        <LinkItem to={isAuthenticated ? routes.home() : routes.login()}>
          <HomeIcon />
        </LinkItem>
      </div>
    </div>
  )
}

const DeskView = () => {
  const { currentUser, isAuthenticated } = useAuth()
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)
  return (
    <div className="">
      <div className="absolute">
        <div className="relative -top-5 -left-2">
          <OrangeStar className="relative top-4 left-6 w-5" />
          <OrangeStar className="relative w-8" />
        </div>
        <div className="relative -top-32 left-[280px]">
          <OrangeStar className="relative top-4 left-6 w-5" />
          <OrangeStar className="relative w-8" />
        </div>

        <Arrow className="relative top-[40px] w-80" />
        <RetroLogoLayerSvg
          className="relative -top-[460px] -left-[120px]"
          height={700}
        />
        <OrangeStar className="relative -top-[800px] left-[300px] w-8" />
        <div className="relative -top-[860px] left-16 w-10">
          <LinkItem to={isAuthenticated ? routes.home() : routes.login()}>
            <NavHome className="w-56" />
          </LinkItem>
        </div>
      </div>
      {isAuthenticated && (
        <div className="absolute">
          <div className="relative top-[500px] font-condensed">
            <BgProfile className="relative" />
            <Avatar
              user={currentUser}
              className="relative -top-[85px] ml-5 h-[72px] w-[72px] items-center border-4 border-punch bg-punch"
            />
            <p className="relative -top-36 left-[120px] text-3xl text-white">
              {isAuthenticated && currentUser.name}
            </p>
            <p className="relative -top-40 left-[100px] text-3xl text-ulcaGold">
              @{isAuthenticated && currentUser.username}
            </p>
            <button
              onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
              className="relative -top-[250px] left-[290px] text-center text-4xl font-bold text-white focus:text-punch"
            >
              . . .
            </button>
            <div className="relative left-[185px] -top-[440px]">
              <AvatarMenu
                isOpen={isAvatarMenuOpen}
                toggleOpen={setIsAvatarMenuOpen}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { Navigation }
