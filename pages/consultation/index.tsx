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

    const [budgetTimeline, setBudgetTimeline] = useState({})
    const [contactInformation, setContactInformation] = useState({})
    const [serviceInformation, setServiceInformation] = useState({})
    const [contactInformationError, setContactInformationError] = useState(true)
    const [serviceInformationError, setServiceInformationError] = useState(true)
    const [disabledButton, setDisabledButton] = useState(true)

    const router = useRouter()

    useEffect(() => {
        if (!contactInformationError && !serviceInformationError) {
            setDisabledButton(false)
        }
    }, [contactInformationError, serviceInformationError])

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault()
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({
                    ...budgetTimeline,
                    ...contactInformation,
                    ...serviceInformation
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            const { error } = await res.json()
            if (!error) {
                router.push('/consultation/thanks')
            }
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
                    setBudgetTimeline={setBudgetTimeline}
                />
            </FormSection>
            <FormSection title={PROJECT_GOALS}>
                <ProjectGoalsForm 
                    setServiceInformation={setServiceInformation}
                    setServiceInformationError={setServiceInformationError}
                />
            </FormSection>
            <Section>
                <div onClick={(e: any) => handleSubmit(e)}>
                    <Button variant='tertiary' disabled={disabledButton}>
                        {SUBMIT}
                    </Button>
                </div>
            </Section>
        </div>
    )
}

export default ConsultationPage
