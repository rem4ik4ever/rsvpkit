import { gql } from "@urql/next";

export const authenticatedItemQuery = gql`
query AuthenticatedItem {
  authenticatedItem {
    __typename
    ... on User {
      __typename
      id
      name
      firstName
      lastName
      avatarUrl
      email
      emailConfirmedAt
      createdAt
    }
  }
}
`

export const authenticateUserWithPasswordMutation = gql`
mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        __typename
        id
        email
        name
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      __typename
      message
    }
  }
}
`

export const RegisterUser = gql`
mutation RegisterUser($email: String!, $password: String!, $name: String!) {
  createUser(data: {
    name: $name,
    email: $email,
    password: $password
  }) {
    __typename
    id
    name
    email
  }
}
`

export const LogoutMutation = gql`
mutation Logout {
  endSession
}
`
