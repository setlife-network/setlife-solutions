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
    tile_image_url: String
    device_image_url: String
    logo_image_url: String
    background_banner_image_url: String
    projectDetails: [ProjectDetail]
  }

  type Query {
    fetchProjects: [Project]
    fetchProject(id: Int!): Project
  }

`