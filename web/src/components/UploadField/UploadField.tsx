import { useCallback, useState } from 'react'

import { useDropzone } from 'react-dropzone'
import { CameraIcon } from 'web/public/CameraIcon'
import { CloseIcon } from 'web/public/CloseIcon'

import { Cover } from '../Avatar/Cover/Cover'

const UploadField = ({ user, value }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const url = new URL('https://www.filestackapi.com/api/store/S3')
    url.search = new URLSearchParams({
      key: process.env.FILESTACK_API_KEY,
    }).toString()
    try {
      const response = await fetch(url.toString(), {
        method: 'POST',
        body: acceptedFiles,
      })
      const result = await response.json()
      setUploadedFile(result.url)
    } catch (e) {
      console.error(e)
    }
  }, [])
  const [uploadedFile, setUploadedFile] = useState<string>(value)
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="absolute -mt-[360px] object-center md:-mt-96 lg:ml-0">
      <Cover user={user} />
      <CameraIcon className="relative left-[35%] -mt-44 md:left-[40%]" />
      <CloseIcon className="relative left-[55%] -mt-20 md:left-[60%]" />
    </div>
  )
}
export { UploadField }
