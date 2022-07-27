import { gql } from 'apollo-server-micro'

module.exports = gql`

  type ServicePackage {
    id: Int
    name: String
    description: String
    estimated_cost: String
    minimum_cost: String
    meeting_frequency: String
    subtitle: String
    additional_notice: String
  }

  type Query {
    fetchServicePackages: [ServicePackage]
  }

`