import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Test {
    id: Int
    title: String
    desctription: String
  }

  type Query {
    getTest(id: Int!): Test
  }

  input TypeCreateFields {
    id: Int!
    title: String!
    description: String!
  }

  type Mutation {
    createType(
      createFileds: TypeCreateFields!
    ): Test
  }

`