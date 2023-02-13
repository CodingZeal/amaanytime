import { MetaTags } from '@redwoodjs/web'
//@ts-expect-error no default export

import UserProfileCell from 'src/components/UserProfileCell/UserProfileCell'

type UserPageProps = {
  id: string
}

const UserProfilePage = ({ id }: UserPageProps) => {
  return (
    <>
      <MetaTags title="UserProfile" description="UserProfile page" />
      <UserProfileCell id={id} />
    </>
  )
}

export default UserProfilePage
