import type { NextPage } from 'next'

import Headline from '../../components/Headline'
import Section from '../../components/Section'

const ConsultationPage: NextPage = () => {
    return (
        <div className='ConsultationPage'>
            <Section>
                <Headline variant='h1'>
                    Please fill out the form below to schedule your consultation. 
                </Headline>
            </Section>
        </div>
    )
}

export default ConsultationPage
