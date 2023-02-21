import { useState } from 'react'

import { useDropzone } from 'react-dropzone'

import { useFormContext, useRegister } from '@redwoodjs/forms'

import { UploadCover } from './UploadCover'

export interface UploadFieldI {
  name?: string
  user: {
    cover?: string
  }
  type?: 'cover'
}

const UploadField = ({ user, type }: UploadFieldI): JSX.Element => {
  const onDrop = async (file: File[]) => {
    const url = new URL('https://www.filestackapi.com/api/store/S3')
    url.search = new URLSearchParams({
      key: process.env.FILESTACK_API_KEY,
    }).toString()
    try {
      const response = await fetch(url.toString(), {
        method: 'POST',
        body: file[0],
      })
      const result = await response.json()
      setValue(user.cover, result.url)
      // setCurrentValue(result.url)
    } catch (e) {
      console.error(e)
    }
  }

  const clearValue = () => {
    setCurrentValue(null)
  }

  const [currentValue, setCurrentValue] = useState<string>(user.cover)
  // const registerReturn = useRegister({ name })
  // const { setValue } = useFormContext()

  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const fileInputName = `${type}-uploadField`

  const UPLOAD_FIELD_MAP = () => {
    const defaultProps = {
      clearValue,
      // currentValue,
      fileInputName,
      getInputProps,
      getRootProps,
      // name,
      // registerReturn,
      user,
    }

    return {
      default: <UploadCover {...defaultProps} />,
      cover: <UploadCover {...defaultProps} />,
    }
  }

  return UPLOAD_FIELD_MAP()[type ?? 'default']
}

export { UploadField }
