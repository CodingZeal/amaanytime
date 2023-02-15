import type { ComponentMeta } from '@storybook/react'

import { UploadField } from './UploadField'

export const generated = () => {
  return <UploadField name={undefined} value={undefined} />
}

export default {
  title: 'Components/UploadField',
  component: UploadField,
} as ComponentMeta<typeof UploadField>
