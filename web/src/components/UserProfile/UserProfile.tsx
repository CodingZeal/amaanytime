import { LinkIcon, Location } from 'src/components/Svgs'

import { Avatar } from '../Avatar/Avatar'
import { Cover } from '../Avatar/Cover/Cover'

const UserProfile = ({ user }) => {
  return (
    <div className="flex h-auto w-screen flex-col bg-bg">
      <Cover name={user.name} src={user.cover} />
      <div className="mx-5 -mt-20">
        <Avatar
          name={user.name}
          src={user.avatar}
          className="relative h-[120px] w-[120px]"
        />
        <div className="-mt-4 font-slab text-base font-medium">
          <h1 className="md:text-6xl font-condensed text-5xl text-punch">
            {user.name}
          </h1>
          <h2 className="text-lg mb-2 font-sans font-extrabold md:text-xl">
            @{user.username}
          </h2>
          <h2 className="mb-4">{user.bio}</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="my-2 flex items-center">
              <Location />
              <h2>{user.location}</h2>
            </div>
            <div className="my-2 flex items-center md:mx-auto">
              <LinkIcon />
              <h2 className="font-bold underline">{user.website}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { UserProfile }
