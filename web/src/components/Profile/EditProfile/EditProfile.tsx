import { CameraIcon } from 'web/public/CameraIcon'

import { Form } from '@redwoodjs/forms'

import { Avatar } from 'src/components/Avatar/Avatar'
import { ActionButton } from 'src/components/Forms/ActionButton'
import { TextInput } from 'src/components/Forms/TextInputs'
import { UploadField } from 'src/components/UploadField/UploadField'

const EditProfile = ({ profile, onSave }) => {
  return (
    <div
      id="edit-profile"
      className="mx-auto w-full px-6 md:px-10 lg:mx-10 lg:w-1/2 lg:px-4"
    >
      <UploadField name="cover" user={profile} type="cover" />
      <div className="mt-[360px] md:mt-96">
        <div className="absolute -mt-8 md:-mx-2 md:-mt-20">
          <Avatar
            user={profile}
            className="relative -mt-24 h-[120px] w-[120px] md:h-[160px] md:w-[160px]"
          />
          <CameraIcon className="relative -mt-24 ml-[20px] md:-mt-28 md:ml-10" />
        </div>
        <div>
          <h2 className="font-condensed text-5xl text-punch md:mt-28">
            My Profile
          </h2>
          <Form onSubmit={onSave}>
            <TextInput
              name="name"
              label="name"
              value={profile.name}
              // className="mb-4"
            />
            <TextInput
              name="username"
              label="username"
              value={profile.username}
              // className="mb-4"
            />
            <TextInput
              name="pronouns"
              label="pronouns"
              value={profile.pronouns}
              // className="mb-4"
            />
            <TextInput
              name="bio"
              label="bio"
              value={profile.bio}
              // className="mb-4"
            />
            <TextInput
              name="location"
              label="location"
              value={profile.location}
              // className="mb-4"
            />
            <TextInput
              name="website"
              label="website"
              value={profile.website}
              // className="mb-4"
            />

            <div className="flex justify-end">
              <ActionButton
                type="submit"
                style={{
                  marginTop: 20,
                  width: 192,
                }}
              >
                UPDATE PROFILE
              </ActionButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export { EditProfile }
