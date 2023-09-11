const { gql } = require("apollo-server")

module.exports = gql`

type User {
  _id: String
  name: String
  email: String
  password: String
  role: String
}

input createUserInput {
  name: String
  email: String
  password: String
  role: String
}

input editUserInput{
  _id: String
  name: String
  email: String
  role: String
}

type Query {
  getAllUser:[User]
}
type Mutation {
  createUser(input: createUserInput!): User
  editUser(input: editUserInput): User
}

`