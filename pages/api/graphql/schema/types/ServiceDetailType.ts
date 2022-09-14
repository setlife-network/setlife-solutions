import { gql } from 'apollo-server-micro'

module.exports = gql`

  type ServiceDetail {
    id: Int
    service_id: Int
    detail: String
  }

  type Query {
    fetchServiceDetail(id: Int!): ServiceDetail
  }

` 