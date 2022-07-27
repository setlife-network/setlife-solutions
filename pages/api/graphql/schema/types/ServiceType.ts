import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Service {
    id: Int
    name: String
    description: String
  }

  type Query {
    fetchServices: [Service]
  }

` 