import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { SearchGraphic, RetroLogoSvg } from 'src/components/Svgs'

function HomePage() {
  const [search, setSearch] = useState<string>()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div
        data-testid="home-page"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translateY(-5%)',
          flexDirection: 'column',
          zIndex: -1,
        }}
      >
        <RetroLogoSvg height={400} />
        <div className="mt-2 flex items-center justify-center">
          <SearchGraphic className="fixed z-[-2]" height={64} />
          <input
            style={{
              transform: 'translateX(70px)',
              color: 'black',
            }}
            className="z-[2] bg-transparent p-1"
            value={search}
            placeholder="to implement"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
