import BackgroundClip from 'src/assets/bg-clip.png'
import { useDevice } from 'src/hooks/useDevice'

export const AuthHeader = ({ children }: { children: React.ReactNode }) => {
  const { isIPad, isMobile } = useDevice()
  return (
    <>
      {isMobile || isIPad ? (
        <MobileAuthHeader>{children}</MobileAuthHeader>
      ) : (
        <DesktopAuthHeader>{children}</DesktopAuthHeader>
      )}
    </>
  )
}

const DesktopAuthHeader = ({ children }) => (
  <div className="font-condensed text-[110px] uppercase md:mb-10 md:leading-10">
    {children}
  </div>
)

const MobileAuthHeader = ({ children }: { children: React.ReactNode }) => {
  const { isIPad } = useDevice()
  return (
    <div
      style={{
        transform: isIPad ? 'translateY(40px)' : 'translateY(40px)',
        background: `url(${BackgroundClip})`,
        padding: 8,
        margin: 0,
        lineHeight: 0.8,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
      className="font-condensed text-[72px] uppercase"
    >
      {children}
    </div>
  )
}
