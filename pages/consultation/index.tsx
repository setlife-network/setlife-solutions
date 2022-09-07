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
    PROJECT_GOALS
} from '../../constants/strings'

const ConsultationPage: NextPage = () => {

    const [budget, setBudget] = useState({
        minBudget: 10000,
        maxBudget: 50000
    })
    const [timeline, setTimeline] = useState({})
    const [contactInformation, setContactInformation] = useState({})
    const [serviceInformation, setServiceInformation] = useState({})
    const [services, setServices] = useState({})

    const router = useRouter()

    const handleSubmit = async (e: any) => {
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
        router.push('/consultation/thanks')
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
            <FormSection title={CONTACT_INFORMATION}>
                <ContactInformation 
                    setContactInformation={setContactInformation}
                />
            </FormSection>
            <FormSection title={BUDGET_AND_TIMELINE}>
                <BudgetTimelineForm
                    setBudget={setBudget}
                    setTimeline={setTimeline}
                />
            </FormSection>
            <FormSection title={PROJECT_GOALS}>
                <ProjectGoalsForm 
                    setServiceInformation={setServiceInformation}
                    setServices={setServices}
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
