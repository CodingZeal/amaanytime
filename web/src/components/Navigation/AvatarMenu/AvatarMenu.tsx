import { useEffect, useRef } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, NavLink, routes } from '@redwoodjs/router'

import { useDevice } from 'src/hooks/useDevice'
import { displayName } from 'src/utils/UserHelpers'

const LinkItem = (props) => (
  <NavLink
    data-testid="nav__link-item"
    className="mr-3 cursor-pointer"
    {...props}
  >
    {props.children}
  </NavLink>
)
const AvatarMenu = ({ isOpen, toggleOpen }) => {
  const { isIPad, isMobile } = useDevice()

  const avatarRef = useRef(null)

  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      if (e.key === 'Escape') {
        toggleOpen(!isOpen)
      }
    }

    const clickOutside = (e: MouseEvent) =>
      !avatarRef.current.contains(e.target as Node)

    const clickAway = (e: MouseEvent) => {
      if (isOpen && clickOutside(e)) {
        toggleOpen(!isOpen)
      }
    }
    document.body.addEventListener('mousedown', clickAway)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('mousedown', clickAway)
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [isOpen, toggleOpen])

  if (isMobile || isIPad) {
    return (
      <div
        data-testid="avatarNav"
        ref={avatarRef}
        className={` ${isOpen ? '' : 'hidden'}`}
      >
        <MobileAvatarMenuView />
      </div>
    )
  }

  return (
    <div
      data-testid="avatarNav"
      ref={avatarRef}
      className={` ${isOpen ? '' : 'hidden'}`}
    >
      <DesktopAvatarMenuView />
    </div>
  )
}

const MobileAvatarMenuView = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()

  const logoutHandler = () => {
    logOut()
    navigate(routes.home())
  }
  return (
    <div className="fixed mt-16 h-screen w-80 bg-black font-slab text-xl">
      <div className="mx-6">
        <h2 className="my-2 font-condensed text-4xl text-punch">
          {isAuthenticated && displayName(currentUser)}
        </h2>
        <div className="flex flex-col border-t-2 border-white text-white">
          <LinkItem className="my-4" to={routes.profile()}>
            Edit Profile
          </LinkItem>
          <LinkItem className="my-4" to={routes.editEmail()}>
            Edit Email
          </LinkItem>
          <LinkItem className="my-4" to={routes.editPassword()}>
            Edit Password
          </LinkItem>
          <button className="fixed bottom-40 mt-4" onClick={logoutHandler}>
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  )
}

const DesktopAvatarMenuView = () => {
  const { logOut } = useAuth()
  const logoutHandler = () => {
    logOut()
    navigate(routes.home())
  }
  return (
    <div className="relative flex w-36 flex-col bg-ulcaGold text-center font-slab text-sm font-extrabold text-black">
      <LinkItem className="my-2" to={routes.profile()}>
        Edit Profile
      </LinkItem>
      <LinkItem className="my-2" to={routes.editEmail()}>
        Edit Email
      </LinkItem>
      <LinkItem className="my-2" to={routes.editPassword()}>
        Edit Password
      </LinkItem>
      <div className="mx-2 cursor-pointer border-t-2 border-black">
        <button className="mt-2" onClick={logoutHandler}>
          LOG OUT
        </button>
      </div>
      <span className="relative left-[115px] top-[16px] h-[17px] w-[17px] origin-top-right rotate-45 border-8 border-ulcaGold fill-ulcaGold	"></span>
    </div>
  )
}

export { AvatarMenu }
