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

export const EDIT_USER = gql`
  mutation EditUser($input: editUserInput) {
    editUser(input: $input) {
      _id
      name
      email
      role
    }
  }
`;
