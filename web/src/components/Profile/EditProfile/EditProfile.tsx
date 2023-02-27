import { CameraIcon } from 'web/public/CameraIcon'

import { Form, FormError } from '@redwoodjs/forms'

import { Avatar } from 'src/components/Avatar/Avatar'
import { ActionButton } from 'src/components/Forms/ActionButton'
import { TextInput } from 'src/components/Forms/TextInputs'
import { UploadField } from 'src/components/UploadField/UploadField'

const EditProfile = ({ error, loading, profile, onSave }) => {
  return (
    <div id="edit-profile" className="mx-auto w-screen lg:w-1/2 ">
      <Form onSubmit={onSave} error={error}>
        <FormError
          error={error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <UploadField
          name="cover"
          user={profile}
          type="cover"
          value={profile.cover}
        />
        <div className="mx-4 justify-start md:mx-10 ">
          <div className="relative -ml-4">
            <Avatar
              user={profile}
              className="h-[120px] w-[120px] md:h-[160px] md:w-[160px]"
            />
            <CameraIcon className="ml-[20px] -mt-[95px] md:-mt-28 md:ml-8 md:h-[90px] md:w-[90px]" />
          </div>

          <h2 className="my-4 font-condensed text-5xl text-punch">
            My Profile
          </h2>

          <TextInput name="name" label="name" value={profile.name} />
          <TextInput
            name="username"
            label="username"
            value={profile.username}
          />
          <TextInput
            name="pronouns"
            label="pronouns"
            value={profile.pronouns}
          />
          <TextInput name="bio" label="bio" value={profile.bio} />
          <TextInput
            name="location"
            label="location"
            value={profile.location}
          />
          <TextInput name="website" label="website" value={profile.website} />

          <div className="flex max-w-[1000px] justify-end">
            <ActionButton
              loading={loading}
              type="submit"
              style={{
                marginTop: 20,
                width: 192,
              }}
            >
              UPDATE PROFILE
            </ActionButton>
          </div>
        </div>
      </Form>
    </div>
  )
}

export { EditProfile }
