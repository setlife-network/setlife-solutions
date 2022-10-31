import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Consultation {
    id: Int
    name: String
    email: String
    phone_number: String
    max_budget: String
    min_budget: String
    company_type: String
    project_goals: String
    description: String
    constraints: String
  }

  input createFields {
    name: String!
    email: String!
    phone_number: String
    max_budget: String!
    min_budget: String!
    company_type: String!
    project_goals: String
    description: String
    constraints: String
  }

  type Mutation {
    createConsultation(
      createFields: createFields!
    ): Consultation
  }

`