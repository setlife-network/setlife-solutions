import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import BudgetTimelineForm from '../../components/BudgetTimelineForm'
import Button from '../../components/Button'
import ContactInformation from '../../components/ContactInformation'
import FormSection from '../../components/FormSection'
import Headline from '../../components/Headline'
import ProjectGoalsForm from '../../components/ProjectGoalsForm'
import Section from '../../components/Section'

import {
    PLEASE_FILL_OUT_THE_FORM,
    SUBMIT,
    CONTACT_INFORMATION,
    BUDGET_AND_TIMELINE,
    PROJECT_GOALS,
    FIELDS_WITH_ARE_REQUIRED
} from '../../constants/strings'
import Subtitle from '../../components/Subtitle'

const ConsultationPage: NextPage = () => {

    const DEFAULT_MIN_BUDGET = 10000
    const DEFAULT_MAX_BUDGET = 50000

    const [budget, setBudget] = useState({
        minBudget: DEFAULT_MIN_BUDGET,
        maxBudget: DEFAULT_MAX_BUDGET
    })
    const [timeline, setTimeline] = useState({})
    const [contactInformation, setContactInformation] = useState({})
    const [serviceInformation, setServiceInformation] = useState({})
    const [services, setServices] = useState({})
    const [contactInformationError, setContactInformationError] = useState(true)
    const [serviceInformationError, setServiceInformationError] = useState(true)
    const [disabledButton, setDisabledButton] = useState(true)

    const router = useRouter()

    useEffect(() => {
        setDisabledButton(
            contactInformationError || 
            serviceInformationError
        )
    }, [contactInformationError, serviceInformationError])

    const handleSubmit = async (e: any) => {
        if (disabledButton) return
        try {
            e.preventDefault()
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({
                    services,
                    timeline,
                    ...budget,
                    ...contactInformation,
                    ...serviceInformation
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            const { error } = await res.json()
            if (error) throw error
            router.push('/consultation/thanks')
        } catch (error) {
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
            <FormSection title={CONTACT_INFORMATION}>
                <ContactInformation 
                    setContactInformation={setContactInformation}
                    setContactInformationError={setContactInformationError}
                />
            </FormSection>
            <FormSection title={BUDGET_AND_TIMELINE}>
                <BudgetTimelineForm
                    setBudget={setBudget}
                    defaultBudget={[DEFAULT_MIN_BUDGET, DEFAULT_MAX_BUDGET]}
                />
            </FormSection>
            <FormSection title={PROJECT_GOALS}>
                <ProjectGoalsForm 
                    setServiceInformation={setServiceInformation}
                    setServices={setServices}
                    setServiceInformationError={setServiceInformationError}
                />
            </FormSection>
            <Section>
                <div className={`grid grid-cols-1 md:grid-cols-3 ${disabledButton ? 'block' : 'hidden'}`}>
                    <div className='hidden md:block' />
                    <Subtitle variant='xs-light' alignment='text-center md:text-right'>
                        {FIELDS_WITH_ARE_REQUIRED}
                    </Subtitle>
                </div>
                <div className='grid grid-cols-1 mt-5 md:grid-cols-3' onClick={(e: any) => handleSubmit(e)}>
                    <div className='hidden md:block' />
                    <Button variant='tertiary' disabled={disabledButton}>
                        {SUBMIT}
                    </Button>
                </div>
            </Section>
        </div>
    )
}

export default ConsultationPage
