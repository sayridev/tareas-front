import { gql } from "@apollo/client";

export const ADD_Task = gql`
mutation CreateTask($createTaskInput: CreateTaskInput!) {
    createTask(createTaskInput: $createTaskInput) {
      description
      id
      isActive
    }
  }
`;