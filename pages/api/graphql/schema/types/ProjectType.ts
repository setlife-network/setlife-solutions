import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Project {
    id: Int
    name: String
    description: String
    client_name: String
    client_description: String
    project_resource: String
    other_resource: String
  }

  type Query {
    fetchProjects: [Project]
    fetchProject(id: Int): Project
  }

`