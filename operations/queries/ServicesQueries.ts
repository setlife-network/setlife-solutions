import { gql } from '@apollo/client'

export const GET_SERVICES = gql`
  query {
    fetchServices {
        id
        name
        description
    }
  }
`