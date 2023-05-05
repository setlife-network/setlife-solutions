import type { GetStaticProps, NextPage } from 'next'
import ContributorInquiryForm from '../../components/ContributorInquiryForm'
import Section from '../../components/Section'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'inquiry'])),
    },
})

const ContributorInquiryPage: NextPage = () => {
    return (
        <Section>
            <ContributorInquiryForm />
        </Section>
    )
}

export default ContributorInquiryPage