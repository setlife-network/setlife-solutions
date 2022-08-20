import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query {
    fetchProjects {
        id
        name
        description
        client_name
        client_description
        project_resource
        other_resource
    }
  }
`