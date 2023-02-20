import { Footer } from 'src/components/Footer'

import { AuthBackgrounds } from './AuthBackgrounds'

const GRID_LAYOUT = {
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr auto',
}

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={GRID_LAYOUT}>
      <div className="grid h-auto grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-center">
        <AuthBackgrounds />
        {children}
        <Footer />
      </div>
    </div>
  )
}
