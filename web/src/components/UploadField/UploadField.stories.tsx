import type { ComponentMeta } from '@storybook/react'

import { UploadField } from './UploadField'

export const generated = () => {
  return (
    <UploadField
      user={{
        cover: '',
      }}
    />
  )
}

export default {
  title: 'Components/UploadField',
  component: UploadField,
} as ComponentMeta<typeof UploadField>
