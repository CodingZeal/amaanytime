import React from 'react'

interface ICloseIcon {
  className?: string
  height?: string
  width?: string
}

const CloseIcon = ({
  className = '',
  height = '80',
  width = '80',
}: ICloseIcon): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="70" rx="35" fill="black" fillOpacity="0.5" />
      <path
        d="M44.1854 25.8279C43.6166 25.2591 42.6979 25.2591 42.1291 25.8279L34.9979 32.9445L27.8666 25.8133C27.2979 25.2445 26.3791 25.2445 25.8104 25.8133C25.2416 26.382 25.2416 27.3008 25.8104 27.8695L32.9416 35.0008L25.8104 42.132C25.2416 42.7008 25.2416 43.6195 25.8104 44.1883C26.3791 44.757 27.2979 44.757 27.8666 44.1883L34.9979 37.057L42.1291 44.1883C42.6979 44.757 43.6166 44.757 44.1854 44.1883C44.7541 43.6195 44.7541 42.7008 44.1854 42.132L37.0541 35.0008L44.1854 27.8695C44.7395 27.3154 44.7395 26.382 44.1854 25.8279Z"
        fill="white"
      />
    </svg>
  )
}

export { CloseIcon }
