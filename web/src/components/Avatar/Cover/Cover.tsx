import { displayName, nameColor } from 'src/utils/UserHelpers'

export interface ICover {
  user: {
    cover?: string
  }
  className?: string
}

const Cover = ({ user, className = '' }: ICover): JSX.Element => {
  return (
    <div>
      {user?.cover ? (
        <img
          className={`h-[295px] w-screen object-cover object-center ${className}`}
          src={user.cover}
          alt={displayName(user)}
        />
      ) : (
        <svg
          viewBox="0 0 1280 295"
          width="auto"
          height="295px"
          fill={nameColor(displayName(user))}
          opacity="70%"
          preserveAspectRatio="none"
          data-testid="cover"
        >
          <title>Cover</title>
          <rect width="100%" height="100%" />
        </svg>
      )}
    </div>
  )
}

export { Cover }
