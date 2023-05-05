import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';

import Paragraph from './Paragraph'

import {
    SOFTWARE_CONSULTING,
    PROJECT_MANAGEMENT,
    PRODUCT_DESIGN,
    SOFTWARE_IMPLEMENTATION,
    APPLICATION_MAINTENANCE,
    WHICH_SERVICE_BEST_FITS,
    GIVE_US_BRIEF_DESCRIPTION,
    PLEASE_GIVE_A_DESCRIPTION,
    UNDECIDED,
} from '../constants/strings'

interface ProjectGoalsFormProps {
    setServiceInformation: any,
    setServiceInformationError: any
    setServices: any
}

const ProjectGoalsForm = ({
    setServiceInformation,
    setServices,
    setServiceInformationError
}: ProjectGoalsFormProps) => {
    const { t } = useTranslation('consultation')

    const [serviceTypes, setServiceTypes] = useState<string[]>([])
    const [projectGoal, setProjectGoal] = useState('')
    const [serviceTypeError, setServiceTypeError] = useState(false)
    const [projectGoalError, setProjectGoalError] = useState(false)

    useEffect(() => {
        setServiceInformation({ projectGoal })
    }, [projectGoal])
    
    useEffect(() => {
        setServices(serviceTypes)
        setServiceTypeError(!serviceTypes.length)
    }, [serviceTypes])

    useEffect(() => {
        if (!serviceTypeError && !projectGoalError && projectGoal) {
            setServiceInformationError(false)
        } else {
            setServiceInformationError(true)
        }
    }, [serviceTypeError, projectGoalError, projectGoal])

    const addServiceType = (service: string) => {
        if (serviceTypes.includes(service)) {
            setServiceTypes(
                serviceTypes.filter((value: string) => value != service)
            )
            return
        }
        setServiceTypes([...serviceTypes, service])
    }

    const onChangeProjectGoal = (value: string) => {
        setProjectGoal(value)
        setProjectGoalError(value
            ? false
            : true
        )
    }

    const renderServiceTypes = () => {
        const services = [
            {
                name: SOFTWARE_CONSULTING,
            },
            {
                name: PROJECT_MANAGEMENT
            },
            {
                name: PRODUCT_DESIGN
            },
            {
                name: SOFTWARE_IMPLEMENTATION
            },
            {
                name: APPLICATION_MAINTENANCE
            },
            {
                name: UNDECIDED
            },
        ]
        return services.map(service => {
            return (
                <div className='w-fit' onClick={() => addServiceType(t(service.name))}>
                    <label 
                        className='form-check-label inline-block text-solid-black' 
                        htmlFor='flexRadioDefault1'
                        key={service.name}
                    >
                        <input 
                            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' 
                            type='checkbox' 
                            name='serviceRadio' 
                            id={service.name} 
                            checked={serviceTypes.includes(t(service.name))}
                            onChange={() => {}}
                        />
                        { t(service.name) }
                    </label>
                </div>
            )
        })
    }

    return (
        <div className='ProjectGoalsForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-8/12'>
                <Paragraph variant='m-bold'>
                    {t(WHICH_SERVICE_BEST_FITS) + '*'}
                </Paragraph>
                { renderServiceTypes() }
                <Paragraph variant='m-bold'>
                    {t(GIVE_US_BRIEF_DESCRIPTION) + '*'}
                </Paragraph>
                <textarea
                    className={`
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        bg-white 
                        bg-clip-padding
                        border border-2 
                        ${projectGoalError ? 'border-red-600' : 'border-primary'}
                        rounded-lg
                        m-0
                    `}
                    id='formControlTextarea'
                    rows={10}
                    onChange={(e) => onChangeProjectGoal(e.target.value)}
                />
                {projectGoalError && (
                    <span className='px-5 text-red-600'>
                        { t(PLEASE_GIVE_A_DESCRIPTION) }
                    </span>
                )}
            </div>
        </div>
    )
}

export default ProjectGoalsForm