import { gql } from '@apollo/client'

export const GET_TEST = gql `
  query Test {
    getTest(id: 1) {
      id
      title
      desctription
    }
  }
`