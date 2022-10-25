import type { NextPage } from 'next'
import ContributorInquiryForm from '../../components/ContributorInquiryForm'
import Section from '../../components/Section'

const ContributorInquiryPage: NextPage = () => {
    return (
        <Section>
            <ContributorInquiryForm />
        </Section>
    )
}

export default ContributorInquiryPage