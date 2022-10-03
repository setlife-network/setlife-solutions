import type { NextPage } from 'next'

import Hero from '../components/Hero'
import Services from '../components/Services'
import BitcoinOperation from '../components/BitcoinOperation'
import Section from '../components/Section'

const Home: NextPage = () => {

    return (
        <div>
            <Section paddingTop='pt-8'>
                <Hero />
            </Section>
            <Section color='light-gray'>
                <Services />
            </Section>
            <Section color='primary' paddingBottom=''>
                <BitcoinOperation />
            </Section>
        </div>
    )
}

export default Home
