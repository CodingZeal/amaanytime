import { useState, useEffect } from 'react'

const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
}

interface Size {
  width: number
  height: number
}

interface IDeviceInfo extends Size {
  isMobile: boolean
  isIPad: boolean
}

export function useDevice(): IDeviceInfo {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    if (window) {
      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
    return () => {}
  }, [])

  const { width } = windowSize
  const isMobile = width < TAILWIND_BREAKPOINTS.md
  const isIPad = width <= 834 && width > TAILWIND_BREAKPOINTS.sm

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile,
    isIPad,
  }
}
