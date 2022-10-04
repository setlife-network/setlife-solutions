import React from 'react'
import { useQuery } from '@apollo/client'

import Pulse from './Pulse'
import Headline from './Headline'
import ServiceTile from './ServiceTile'

import ServiceProps from '../interfaces/ServiceProps'

import { GET_SERVICES } from '../operations/queries/ServicesQueries'

import { SERVICES } from '../constants/strings'

interface getServices {
    fetchServices: ServiceProps[]
}

const Services = () => {

    const { error, data, loading } = useQuery<getServices>(
        GET_SERVICES
    )

    if (error || loading) {
        return (
            <div className='grid grid-rows place-content-center'>
                <Pulse />
            </div>
        )
    }

    const services = [...data!.fetchServices]

    const renderServices = () => {
        return services.map((s, i) => {
            return (
                <div className='flex flex-initial w-full md:w-1/3 px-4' key={`st-${s.id}`}>
                    <ServiceTile
                        name={s.name}
                        description={s.description}
                        url={`/services/${s.id}`}
                        imageUrl={s.tile_image_url}
                    />
                </div>
            )
        })
    }

    return (
        <div className='Services'>
            <div className='mb-12'>
                <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                    { SERVICES }
                </Headline>
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-y-8'>
                {renderServices()}
            </div>
        </div>
    )
}

export default Services