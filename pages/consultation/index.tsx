import type { NextPage } from 'next'

import Button from '../../components/Button'
import ContactInformation from '../../components/ContactInformation'
import FormSection from '../../components/FormSection'
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
            <FormSection title='Contact information'>
                <ContactInformation />
            </FormSection>
            <Button variant='tertiary'>
                Submit
            </Button>
        </div>
    )
}

export default ConsultationPage
