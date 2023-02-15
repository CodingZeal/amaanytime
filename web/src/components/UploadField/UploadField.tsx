import { useCallback, useState } from 'react'

import { useDropzone } from 'react-dropzone'

import { HiddenField } from '@redwoodjs/forms'

const UploadField = ({ name, value }): JSX.Element => {
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
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <HiddenField name={name} value={uploadedFile} />
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  )
}
export { UploadField }
