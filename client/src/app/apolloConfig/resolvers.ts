import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      _id
      name
      email
      role
    }
  }
`;