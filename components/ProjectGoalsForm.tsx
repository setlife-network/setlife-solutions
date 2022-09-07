import { useEffect, useState } from 'react'

import Paragraph from './Paragraph'

import {
    SOFTWARE_CONSULTING,
    PROJECT_MANAGEMENT,
    PRODUCT_DESIGN,
    SOFTWARE_IMPLEMENTATION,
    APPLICATION_MAINTENANCE,
    WHICH_SERVICE_BEST_FITS,
    GIVE_US_BRIEF_DESCRIPTION
} from '../constants/strings'

interface ProjectGoalsFormProps {
    setServiceInformation: any
    setServices: any
}

const ProjectGoalsForm = ({
    setServiceInformation,
    setServices
}: ProjectGoalsFormProps) => {

    const [serviceTypes, setServiceTypes] = useState<string[]>([])
    const [projectGoal, setProjectGoal] = useState('')

    useEffect(() => {
        setServiceInformation({ projectGoal })
    }, [projectGoal])

    useEffect(() => {
        setServices(serviceTypes)
    }, [serviceTypes])

    const addServiceType = (value: any, service: string) => {
        if (!value.checked) {
            setServiceTypes(
                serviceTypes.filter((value: string) => value != service)
            )
            return
        }
        if (serviceTypes.includes(service)) return
        setServiceTypes([...serviceTypes, service])
    }

    const renderServiceTypes = () => {
        const serviceTypes = [
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
            }
        ]
        return serviceTypes.map(service => {
            return (
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
                        onChange={(value) => addServiceType(value.target, service.name)}
                    />
                    { service.name }
                </label>
            )
        })
    }

    return (
        <div className='ProjectGoalsForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-8/12'>
                <Paragraph variant='m-bold'>
                    {WHICH_SERVICE_BEST_FITS}
                </Paragraph>
                { renderServiceTypes() }
                <Paragraph variant='m-bold'>
                    {GIVE_US_BRIEF_DESCRIPTION}
                </Paragraph>
                <textarea
                    className='
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        bg-white bg-clip-padding
                        border border-2 border-primary
                        rounded-lg
                        m-0
                    '
                    id='formControlTextarea'
                    rows={10}
                    onChange={(e) => setProjectGoal(e.target.value)}
                />
            </div>
        </div>
    )
}

export default ProjectGoalsForm