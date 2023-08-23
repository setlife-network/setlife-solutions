import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Services from '../components/Services'
import BitcoinOperation from '../components/BitcoinOperation'
import Section from '../components/Section'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'home'])),
    },
})

const Home: NextPage = () => {

    return (
        <div>
            <Section paddingTop='pt-8'>
                <Hero />
            </Section>
            <Section color='light-gray'>
                <Services />
            </Section>
            <Section>
                <Testimonials />
            </Section>
            <Section color='primary' paddingBottom='' paddingTop=''>
                <BitcoinOperation />
            </Section>
        </div>
    )
}

export default Home
