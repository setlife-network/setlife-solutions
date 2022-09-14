import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Service {
    id: Int
    name: String
    description: String
    background_banner_image_url: String
    tile_image_url: String
    serviceDetails: [ServiceDetail]
    projects: [Project]
  }

  type Query {
    fetchServices: [Service]
    fetchService(id: Int!): Service
  }

` 