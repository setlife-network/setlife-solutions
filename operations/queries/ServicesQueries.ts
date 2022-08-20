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

export const GET_SERVICE = gql`
  query Service($serviceId: Int!) {
    fetchService(id: $serviceId) {
      id
      name
      description
      serviceDetails {
        id
        service_id
        detail
      }
      projects {
        id
        name
        description
        client_name
        client_description
        project_resource
        other_resource
      }
    }
  }
`