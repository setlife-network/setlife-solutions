import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import BudgetTimelineForm from '../../components/BudgetTimelineForm'
import Button from '../../components/Button'
import ContactInformation from '../../components/ContactInformation'
import FormSection from '../../components/FormSection'
import Headline from '../../components/Headline'
import ProjectGoalsForm from '../../components/ProjectGoalsForm'
import Section from '../../components/Section'
import Subtitle from '../../components/Subtitle'

import { CREATE_CONSULTATION } from '../../operations/mutations/ConsultationMutations'

import {
    PLEASE_FILL_OUT_THE_FORM,
    SUBMIT,
    CONTACT_INFORMATION,
    BUDGET_AND_TIMELINE,
    PROJECT_GOALS,
    FIELDS_WITH_ARE_REQUIRED
} from '../../constants/strings'

interface ContactInformationProps {
    name?: string,
    email?: string,
    phoneNumber?: string,
    clientType?: string
}
interface ServiceInformationFormProps {
    serviceTypes?: string[],
    projectGoal?: string
}

interface ServiceTypesFormProps {
    serviceTypes?: string[]
}

const ConsultationPage: NextPage = () => {

    const DEFAULT_MIN_BUDGET = 10000
    const DEFAULT_MAX_BUDGET = 50000

    const [budget, setBudget] = useState({
        minBudget: DEFAULT_MIN_BUDGET,
        maxBudget: DEFAULT_MAX_BUDGET
    })
    const [timeline, setTimeline] = useState<String[]>([])
    const [contactInformation, setContactInformation] = useState<ContactInformationProps>({})
    const [serviceInformation, setServiceInformation] = useState<ServiceInformationFormProps>({})
    const [services, setServices] = useState<String[]>([])
    const [contactInformationError, setContactInformationError] = useState(true)
    const [serviceInformationError, setServiceInformationError] = useState(true)
    const [disabledButton, setDisabledButton] = useState(true)

    const router = useRouter()

    const [createConsultation] = useMutation(
        CREATE_CONSULTATION, {
            variables: {
                name: contactInformation.name,
                email: contactInformation.email,
                phone_number: contactInformation.phoneNumber,
                max_budget: `${budget.maxBudget}`,
                min_budget: `${budget.minBudget}`,
                company_type: contactInformation.clientType,
                project_goals: services.length ? services.join('. ') : '',
                description: serviceInformation.projectGoal,
                constraints: timeline.length ? timeline.join('. ') : ''
            }
        }
    )

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
            createConsultation()
            router.push('/consultation/thanks')
        } catch (error) {
            console.log(error)
        }
    }

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
                    setTimeline={setTimeline}
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
