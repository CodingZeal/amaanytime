import { Footer } from 'src/components/Footer'

import { LoginBackgrounds } from './LoginBackgrounds'

const GRID_LAYOUT = {
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr auto',
}

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={GRID_LAYOUT}>
      <div
        data-testid="login-page"
        className="grid h-auto grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-center"
      >
        <LoginBackgrounds />
        {children}
        <Footer />
      </div>
    </div>
  )
}
