import { CameraIcon } from 'web/public/CameraIcon'
import { CloseIcon } from 'web/public/CloseIcon'

import { Form } from '@redwoodjs/forms'

import { Avatar } from 'src/components/Avatar/Avatar'
import { ActionButton } from 'src/components/Forms/ActionButton'
import { TextInput } from 'src/components/Forms/TextInputs'
import { displayName, nameColor } from 'src/utils/UserHelpers'

const EditProfile = ({ profile, onSave }) => {
  return (
    <div
      id="edit-profile"
      className="mx-auto w-full px-6 md:px-10 lg:mx-10 lg:w-1/2 lg:px-4"
    >
      <div className="absolute -mt-[360px] object-center md:-mt-96 lg:ml-0">
        {profile.cover ? (
          <img
            className="relative z-cover h-[295px] w-[96rem] object-cover object-center"
            src={profile.cover}
            alt="cover"
            data-testid="cover"
          />
        ) : (
          <svg
            viewBox="0 0 1280 295"
            width="auto"
            height="295px"
            fill={nameColor(displayName(profile))}
            opacity="70%"
            preserveAspectRatio="none"
          >
            <title>Cover</title>
            <rect width="100%" height="100%" />
          </svg>
        )}
        <CameraIcon className="relative left-[35%] -mt-44 md:left-[40%]" />
        <CloseIcon className="relative left-[55%] -mt-20 md:left-[60%]" />
      </div>
      <div className="mt-[360px] md:mt-96">
        <div className="absolute -mt-8 md:-mx-2 md:-mt-20">
          <Avatar
            name={profile.name}
            src={profile.avatar}
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
              className="mb-4"
            />
            <TextInput
              name="username"
              label="username"
              value={profile.username}
              className="mb-4"
            />
            <TextInput
              name="pronouns"
              label="pronouns"
              value={profile.pronouns}
              className="mb-4"
            />
            <TextInput
              name="bio"
              label="bio"
              value={profile.bio}
              className="mb-4"
            />
            <TextInput
              name="location"
              label="location"
              value={profile.location}
              className="mb-4"
            />
            <TextInput
              name="website"
              label="website"
              value={profile.website}
              className="mb-4"
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
