import { displayName, nameColor } from 'src/utils/UserHelpers'

export interface IAvatar {
  user: {
    avatar?: string
  }
  className?: string
  height?: string
  width?: string
}

const Avatar = ({
  user,
  className = '',
  height = '68',
  width = '68',
}: IAvatar): JSX.Element => {
  return (
    <div>
      {user?.avatar ? (
        <img
          className={`rounded-full ${className}`}
          src={user.avatar}
          alt={displayName(user)}
          height={height}
          width={width}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full text-center font-slab ${className} ${nameColor(
            displayName(user)
          )}`}
          data-testid="avatar"
          style={{ height, width }}
        >
          <svg viewBox="0 0 32 32">
            <title>{displayName(user)}</title>
            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              data-testid="initials"
            >
              {displayName(user).charAt(0).toUpperCase()}
            </text>
          </svg>
        </div>
      )}
    </div>
  )
}

export { Avatar }
