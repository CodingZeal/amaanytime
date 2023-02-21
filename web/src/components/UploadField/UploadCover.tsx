import { CameraIcon } from 'web/public/CameraIcon'
import { CloseIcon } from 'web/public/CloseIcon'

import { Cover } from '../Avatar/Cover/Cover'

const UploadCover = ({ user }) => {
  return (
    <div className="absolute -mt-[360px] object-center md:-mt-96 lg:ml-0">
      <Cover user={user} />
      <div className="items-start">
        <label className="text-gray-500 relative left-[35%] -mt-44 cursor-pointer rounded-md bg-white font-medium md:left-[40%]">
          <CameraIcon />
          <span>Browse Files</span>
          <input className="sr-only" type="file" />
        </label>
        <button>
          <CloseIcon className="relative left-[55%] -mt-20 md:left-[60%]" />
        </button>
      </div>
    </div>
  )
}

export { UploadCover }
