import { gql } from 'apollo-server-micro'

module.exports = gql`

  type Testimonial {
    id: Int
    person_name: String
    company_name: String
    testimony: String
    person_image_url: String
    company_image_url: String
    project: [Project]
  }

  type Query {
    fetchTestimonials: [Testimonial]
  }

` 