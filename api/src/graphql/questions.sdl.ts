export const schema = gql`
  type Question {
    id: Int!
    question: String!
    answer: String
    order: Int
    pinned: Boolean
    askedOn: DateTime
    updatedOn: DateTime
    notGoingToAnswer: Boolean
    flag: Boolean
    archive: Boolean
    # askAgains: [AskAgain]!
    # bookmarks: [Bookmark]!
    # likes: [Like]!
    # votes: [Vote]!
    parentQuestion: Question
    parentQuestionId: Int
    questions: [Question]!
    askedBy: User!
    askedByUserId: String!
    answeredBy: User
    answeredByUserId: String
  }

  type Query {
    questions: [Question!]! @requireAuth
    questionsWithAnswers: [Question!]! @requireAuth
    question(id: Int!): Question @requireAuth
  }

  input CreateQuestionInput {
    question: String!
    answer: String
    order: Int
    pinned: Boolean
    askedOn: DateTime
    updatedOn: DateTime
    notGoingToAnswer: Boolean
    flag: Boolean
    archive: Boolean
    parentQuestionId: Int
    askedByUserId: String
    answeredByUserId: String
  }

  input UpdateQuestionInput {
    question: String
    answer: String
    order: Int
    pinned: Boolean
    askedOn: DateTime
    updatedOn: DateTime
    notGoingToAnswer: Boolean
    flag: Boolean
    archive: Boolean
    parentQuestionId: Int
    askedByUserId: String
    answeredByUserId: String
  }

  type Mutation {
    createQuestion(input: CreateQuestionInput!): Question! @requireAuth
    updateQuestion(id: Int!, input: UpdateQuestionInput!): Question!
      @requireAuth
    deleteQuestion(id: Int!): Question! @requireAuth
  }
`
