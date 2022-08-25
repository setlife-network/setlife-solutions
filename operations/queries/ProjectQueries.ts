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
        tile_image_url
    }
  }
`

export const GET_PROJECT = gql`
  query Project($projectId: Int!) {
    fetchProject(id: $projectId) {
      id
      name
      description
      client_name
      client_description
      project_resource
      other_resource
      tile_image_url
      device_image_url
      logo_image_url
      background_banner_image_url
      projectDetails {
        id
        project_id
        description
        type
        sub_type
      }
    }
  }
`