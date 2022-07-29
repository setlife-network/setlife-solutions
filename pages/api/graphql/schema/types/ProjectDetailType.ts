import { gql } from 'apollo-server-micro'

module.exports = gql`

  type ProjectDetail {
    id: Int
    project_id: Int
    description: String
    type: String
    sub_type: String
  }

  type Query {
    fetchProjectDetail(id: Int!): ProjectDetail
  }

`