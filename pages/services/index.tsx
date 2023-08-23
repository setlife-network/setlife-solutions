import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Section from '../../components/Section'
import ServicesTiles from '../../components/Services'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common'])),
    },
})

const Services: NextPage = () => {
    return (
        <div className='Services'>
            <Section color='light-gray'>
                <ServicesTiles />
            </Section>
        </div>
    )
}

export default Services