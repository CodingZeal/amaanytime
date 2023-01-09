import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import UsersCell from 'src/components/Admin/User/UsersCell'

const UsersPage = () => {
  const [showInactive, toggleShowInactive] = useState(false)

  return (
    <>
      <MetaTags title="Users" />
      <div className="ml-4 mb-4 flex">
        <div className="mr-2 text-sm font-light">Show inactive: </div>
        <input
          className="mt-0.5 cursor-pointer"
          type="checkbox"
          checked={showInactive}
          onChange={() => toggleShowInactive(!showInactive)}
        />
      </div>
      <UsersCell showInactive={showInactive} />
    </>
  )
}

export default UsersPage
