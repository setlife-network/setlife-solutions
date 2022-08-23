import React from 'react'

import Headline from '../components/Headline'
import Subtitle from '../components/Subtitle'
import Paragraph from '../components/Paragraph'

import ServicePackageProps from '../interfaces/ServicePackageProps'

import {
    ESTIMATED_COST,
    MINIMUM_COST,
    THIS_PACKAGE_CAN_BE_SCALED_UP
} from '../constants/strings'
import CheckTile from './CheckTile'

interface ServicePackageTileProps {
    servicePackage: ServicePackageProps,
    idx: number | null
}

const ServicePackageTile = ({
    servicePackage, 
    idx = null
}: ServicePackageTileProps) => {

    const {
        id,
        name,
        description,
        additional_notice,
        meeting_frequency,
        estimated_cost,
        minimum_cost
    } = servicePackage

    return (
        <div 
            className='ServicePackageTile bg-solid-white p-8 rounded-lg'
            key={id}
        >
            <div 
                className='grid grid-flow-row auto-rows-max gap-8'
            >
                <div 
                    className='container rounded-full bg-primary h-24 w-24 m-auto'
                >
                    {idx && (
                        <div className='package-number m-auto'>
                            <Headline color='solid-white' alignment='text-center'>
                                {`${idx}`}
                            </Headline>
                        </div>
                    )}
                </div>
                <Subtitle variant='s' alignment='text-center'>
                    { name }
                </Subtitle>
                <Paragraph>
                    { description }  
                </Paragraph>
                {additional_notice && (
                    <CheckTile additional_notice={additional_notice} />
                )}
                <Paragraph color='primary'>
                    { meeting_frequency }
                </Paragraph>
                {estimated_cost && (
                    <>
                        <Paragraph alignment='text-center' color='primary'>
                            { ESTIMATED_COST }
                        </Paragraph>
                        <Paragraph alignment='text-center' color='primary' variant='m-bold'>
                            { estimated_cost }
                        </Paragraph>
                    </>
                )}
                {minimum_cost && (
                    <>
                        <Paragraph alignment='text-center' color='primary'>
                            { MINIMUM_COST }
                        </Paragraph>
                        <Paragraph alignment='text-center' color='primary' variant='m-bold'>
                            { minimum_cost }
                        </Paragraph>
                        <Paragraph alignment='text-center' color='red-600'>
                            { THIS_PACKAGE_CAN_BE_SCALED_UP }
                        </Paragraph>
                    </>
                )}
            </div>
        </div>
    )
}

export default ServicePackageTile