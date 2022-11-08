import { gql } from '@apollo/client'

export const GET_TESTIMONIALS = gql`
  query {
    fetchTestimonials {
        id
        person_name
        testimony
        person_image_url
        project{
          name
          logo_image_url
        }
    }
  }
`
