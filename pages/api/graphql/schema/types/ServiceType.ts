import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Service {
    id: Int
    name: String
    description: String
    serviceDetails: [ServiceDetail]
    projects: [Project]
  }

  type Query {
    fetchServices: [Service]
    fetchService(id: Int!): Service
  }

` 