import { gql } from "@apollo/client"


export const LOGIN_USER = gql`
 mutation LoginUser($input: loginInput) {
  loginUser(input: $input) {
    _id
    name
    email
  }
}
`