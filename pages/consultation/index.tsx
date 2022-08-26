import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import ContactInformation from '../../components/ContactInformation'
import FormSection from '../../components/FormSection'
import Headline from '../../components/Headline'
import Section from '../../components/Section'

import {
    PLEASE_FILL_OUT_THE_FORM,
    SUBMIT
} from '../../constants/strings'

const ConsultationPage: NextPage = () => {

    const [contactInformation, setContactInformation] = useState({})

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await fetch('/api/sendgrid', {
            body: JSON.stringify({...contactInformation}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const { error } = await res.json()
        if (error) {
            console.log(error)
        }
    };

    return (
        <div className='ConsultationPage'>
            <Section>
                <Headline variant='h1'>
                    {PLEASE_FILL_OUT_THE_FORM}
                </Headline>
            </Section>
            <FormSection title='Contact information'>
                <ContactInformation 
                    setContactInformation={setContactInformation}
                />
            </FormSection>
            <Section>
                <div onClick={(e: any) => handleSubmit(e)}>
                    <Button variant='tertiary'>
                        {SUBMIT}
                    </Button>
                </div>
            </Section>
        </div>
    )
}

export default ConsultationPage
