import { Footer } from 'src/components/Footer'
import { Navigation } from 'src/components/Navigation'

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
    }}
  >
    <Navigation />
    {children}
    <Footer />
  </div>
)
