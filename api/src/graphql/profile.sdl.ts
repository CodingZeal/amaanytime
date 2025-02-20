export const schema = gql`
  type Profile {
    id: String!
    email: String!
    username: String!
    name: String
    nickname: String
    pronouns: String
    bio: String
    cover: String
    location: String
    website: String
  }
  type Query {
    profile: Profile @requireAuth
  }

  input UpdateProfileInput {
    email: String
    name: String
    nickname: String
    pronouns: String
    bio: String
    cover: String
    location: String
    website: String
    username: String
  }

  input UpdatePasswordInput {
    existingPassword: String!
    newPassword: String!
    confirmPassword: String!
  }

  input UpdateEmailInput {
    password: String!
    newEmail: String!
  }

  type Mutation {
    updateProfile(input: UpdateProfileInput!): Profile! @requireAuth
    updatePassword(input: UpdatePasswordInput!): Boolean! @requireAuth
    verifyEmail(token: String!): Boolean! @skipAuth
    updateEmail(input: UpdateEmailInput!): Boolean! @requireAuth
  }
`
