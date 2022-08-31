import type { NextPage } from 'next'

import Section from '../../components/Section'
import ServicesTiles from '../../components/Services'

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