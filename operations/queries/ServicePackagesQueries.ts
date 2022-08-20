import { gql } from '@apollo/client'

export const GET_SERVICE_PACKAGES = gql`
  query {
    fetchServicePackages {
        id,
        name,
        description,
        estimated_cost,
        minimum_cost,
        meeting_frequency,
        subtitle,
        additional_notice
    }
  }
`