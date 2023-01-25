import { nameColor } from 'src/utils/UserHelpers'

export interface IAvatar {
  name: string
  className?: string
  height?: string
  src?: string
  width?: string
}

const Avatar = ({
  name,
  className = '',
  height = '68',
  src = '',
  width = '68',
}: IAvatar): JSX.Element => {
  return (
    <div>
      {src ? (
        <img
          className={`rounded-full ${className}`}
          src={src}
          alt={name}
          height={height}
          width={width}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full text-center font-slab ${className} ${nameColor(
            name
          )}`}
          data-testid="avatar"
          style={{ height, width }}
        >
          <svg viewBox="0 0 32 32" data-testid="initials">
            <title>{name}</title>
            <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle">
              {name.charAt(0).toUpperCase()}
            </text>
          </svg>
        </div>
      )}
    </div>
  )
}

export { Avatar }
