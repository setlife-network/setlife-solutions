import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import { GET_SERVICE } from '../../operations/queries/ServicesQueries'

import Button from '../../components/Button'
import List from '../../components/List'
import PageBanner from '../../components/PageBanner'
import Paragraph from '../../components/Paragraph'
import ProjectTile from '../../components/ProjectTile'
import Section from '../../components/Section'
import Subtitle from '../../components/Subtitle'

import ItemProps from '../../interfaces/ItemProps'
import ProjectProps from '../../interfaces/ProjectProps'
import ServiceProps from '../../interfaces/ServiceProps'
import ServiceDetailProps from '../../interfaces/ServiceDetailProps'

import { SOFTWARE_CONSULTING_BANNER_IMAGE_URL } from '../../constants'
import {
    OUR_WORK,
    THIS_IS_THE_BEST_PLACE_TO_START,
    WHAT_WE_DO
} from '../../constants/strings'

interface getService {
    fetchService: ServiceProps
}

const Service: NextPage = () => {

    const [service, setService] = useState<ServiceProps>()
    const [serviceDetails, setServiceDetails] = useState<ServiceDetailProps[]>([])
    const [serviceItems, setServiceItems] = useState<ItemProps[]>([])

    const router = useRouter()
    const serviceId = parseInt(router.query.serviceId as string, 10)

    useEffect(() => {
        const items: ItemProps[] = []
        serviceDetails.map(s => items.push({
            bold: '',
            content: s.detail
        }))
        setServiceItems(items)
    }, [serviceDetails])

    const { error, data, loading } = useQuery<getService>(
        GET_SERVICE,
        { 
            variables: { serviceId },
            onCompleted: payload => {
                console.log('payload.fetchService')
                console.log(payload.fetchService)
                setService(payload.fetchService)
                setServiceDetails(payload.fetchService.serviceDetails)
            }
        },
    )

    if (error || loading) {
        console.log('An error ocurred: ' + error)
        return (
            <>
            </>
        )
    }

    const renderProjects = (projects: ProjectProps[] = []) => {
        console.log('projects')
        console.log(projects)
        return projects.map(p => {
            return (
                <ProjectTile
                    id={p.id}
                    clientName={p.client_name}
                    name={p.name}
                    description={p.description}
                    // TODO: Change this for the project tile_image_url
                    image='https://user-images.githubusercontent.com/49292858/184520232-416851cc-9eb5-4f56-ba4b-450579da88c8.png'
                />
            )
        })
    }

    return (
        <div className='Service'>
            <PageBanner
                // TODO: Change this for service banner_image_url
                image={SOFTWARE_CONSULTING_BANNER_IMAGE_URL}
                title={service ? service.name : ''}
            />
            <Section>
                <div className='grid grid-rows-auto gap-16'>
                    <div className=''>
                        <Paragraph>
                            { THIS_IS_THE_BEST_PLACE_TO_START }
                        </Paragraph>
                    </div>
                    <div className='grid grid-flow-col auto-cols-max'>
                        <Subtitle>
                            { `${WHAT_WE_DO}:` }
                        </Subtitle>
                    </div>
                    <div className=''>
                        <List items={serviceItems} />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                        <Button link='/'>
                            Can you provide these services?
                        </Button>   
                    </div>
                    <Subtitle>
                        { `${OUR_WORK}:` }
                    </Subtitle>
                    <div 
                        className='grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-16 lg:gap-y-12 xl:gap-x-24 gap-y-6 xl:gap-y-16'
                    >
                        { renderProjects(service ? service.projects : []) }
                    </div>
                   
                </div>
            </Section>
        </div>
    )
}

export default Service