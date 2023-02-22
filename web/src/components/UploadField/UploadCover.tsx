import { CameraIcon } from 'web/public/CameraIcon'
import { CloseIcon } from 'web/public/CloseIcon'

import { Cover } from '../Avatar/Cover/Cover'

const UploadCover = ({
  currentValue,
  clearValue,
  fileInputName,
  getInputProps,
  getRootProps,
  registerReturn,
  name,
  user,
}) => {
  return (
    <div className="w-screen object-center">
      <input name={name} type="hidden" {...registerReturn} />
      {!currentValue && (
        <div {...getRootProps()}>
          <Cover className="" user={user} />
          <div className="mx-auto -mt-44 flex w-1/2 items-start justify-evenly">
            <label
              htmlFor={fileInputName}
              className="text-gray-500 flex cursor-pointer flex-col items-center rounded-md font-medium"
            >
              <CameraIcon />
              <span>Browse Files</span>
              <input
                className="sr-only"
                name={fileInputName}
                type="file"
                {...getInputProps()}
              />
            </label>
            <button onClick={clearValue}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
      {currentValue && (
        <button onClick={clearValue}>
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

export { UploadCover }
