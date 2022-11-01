import { gql } from '@apollo/client'

export const CREATE_CONSULTATION = gql`
    mutation CreateConsultation(
        $name: String!
        $email: String!
        $phone_number: String
        $max_budget: String!
        $min_budget: String!
        $company_type: String!
        $project_goals: String!
        $description: String!
        $constraints: String
    ) {
        createConsultation(createFields: {
            name: $name
            email: $email
            phone_number: $phone_number
            max_budget: $max_budget
            min_budget: $min_budget
            company_type: $company_type
            project_goals: $project_goals
            description: $description
            constraints: $constraints
        }){
            id
            name
            email
            phone_number
            max_budget
            min_budget
            company_type
            project_goals
            description
            constraints
        }
    }
`