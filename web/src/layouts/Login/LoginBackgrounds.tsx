import {
  IPadBackgroundSvg,
  MobileBackgroundSvg,
  QuestionsLayerSvg,
  RetroLogoLayerSvg,
  StarsLayerSvg,
} from 'src/components/Svgs'
import { useDevice } from 'src/hooks/useDevice'

const DESKTOP_ABSOLUTE_STYLE: React.CSSProperties = {
  position: 'absolute',
  top: 50,
  left: 50,
  width: '100%',
  height: '100%',
  zIndex: -3,
}

export const LoginBackgrounds = () => {
  const { isMobile, isIPad } = useDevice()

  if (isMobile) {
    return (
      <MobileBackgroundSvg
        style={{ ...DESKTOP_ABSOLUTE_STYLE, left: 30, top: -20 }}
      />
    )
  }

  if (isIPad) {
    return (
      <IPadBackgroundSvg
        style={{
          position: 'absolute',
          top: -30,
          left: 0,
          width: '100%',
          zIndex: -1,
        }}
      />
    )
  }

  return (
    <>
      <StarsLayerSvg style={DESKTOP_ABSOLUTE_STYLE} />
      <RetroLogoLayerSvg style={DESKTOP_ABSOLUTE_STYLE} />
      <QuestionsLayerSvg style={DESKTOP_ABSOLUTE_STYLE} />
    </>
  )
}
