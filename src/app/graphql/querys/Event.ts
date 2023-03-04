import { gql } from "@apollo/client";

export const GET_TASK = gql`
query GET_TASK {
    tasks {
      id
      description
      status
      isActive
      user {
        name
        lastname
      }
    }
  }
`