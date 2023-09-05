const { gql } = require("apollo-server")

module.exports = gql`

type User {
  _id: String
  name: String
  email: String
  password: String
}

input createUserInput {
  name: String
  email: String
  password: String
}

input loginInput {
  email: String!
  password: String!
}

type Query {
  getAllUser:[User]
}
type Mutation {
  createUser(input: createUserInput!): User
  loginUser(input: loginInput): User
}

`