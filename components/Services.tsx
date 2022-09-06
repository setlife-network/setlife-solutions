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

    const renderServicesCols = (services: ServiceProps[]) => {
        return services.map((service, idx) => {
            return (
                <div className={services.length < 3 ? `sm:col-start-${idx + 2 * (idx + 1)} sm:col-span-2` : ''} key={service.id}>
                    <ServiceTile name={service.name} description={service.description} url={`/services/${service.id}`} />
                </div>
            )
        })
    }

    const renderServicesRows = (services: ServiceProps[]) => {
        return services.map((_, idx) => {
            if ((idx * 3) > services.length - 1) return
            return (
                <div className={`grid grid-cols-${(idx * 3) % 2 == 0 ? '3' : '6'} gap-8`}>
                    { renderServicesCols(services.slice(idx * 3, (idx * 3) + 3)) }
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
            <div className='grid grid-rows-1 gap-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div key={services[0].id}>
                        <ServiceTile name={services[0].name} description={services[0].description} url={`/services/${services[0].id}`} />
                    </div>
                    <div key={services[1].id}>
                        <ServiceTile name={services[1].name} description={services[1].description} url={`/services/${services[1].id}`} />
                    </div>
                    <div key={services[2].id}>
                        <ServiceTile name={services[2].name} description={services[2].description} url={`/services/${services[2].id}`} />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                    <div className='lg:col-start-2 lg:col-span-2' key={services[3].id}>
                        <ServiceTile name={services[3].name} description={services[3].description} url={`/services/${services[3].id}`} />
                    </div>
                    <div className='lg:col-start-4 lg:col-span-2' key={services[4].id}>
                        <ServiceTile name={services[4].name} description={services[4].description} url={`/services/${services[4].id}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services