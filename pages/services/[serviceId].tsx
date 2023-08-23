import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

import { GET_SERVICE } from '../../operations/queries/ServicesQueries'

import Button from '../../components/Button'
import List from '../../components/List'
import PageBanner from '../../components/PageBanner'
import Paragraph from '../../components/Paragraph'
import ProjectTile from '../../components/ProjectTile'
import Section from '../../components/Section'
import Subtitle from '../../components/Subtitle'
import Pulse from '../../components/Pulse'

import ItemProps from '../../interfaces/ItemProps'
import ProjectProps from '../../interfaces/ProjectProps'
import ServiceProps from '../../interfaces/ServiceProps'
import ServiceDetailProps from '../../interfaces/ServiceDetailProps'

import { SOFTWARE_CONSULTING_BANNER_IMAGE_URL } from '../../constants'
import {
    VIEW_PRICING,
    OUR_WORK,
    THIS_IS_THE_BEST_PLACE_TO_START,
    WHAT_WE_DO,
    CAN_YOU_PROVIDE_THESE_SERVICES
} from '../../constants/strings'

interface getService {
    fetchService: ServiceProps
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'service'])),
    },
})

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

const Service: NextPage = () => {

    const [service, setService] = useState<ServiceProps>()
    const [serviceDetails, setServiceDetails] = useState<ServiceDetailProps[]>([])
    const [serviceItems, setServiceItems] = useState<ItemProps[]>([])

    const router = useRouter()
    const serviceId = parseInt(router.query.serviceId as string, 10)
    const { t } = useTranslation('service')

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
                setService(payload.fetchService)
                setServiceDetails(payload.fetchService.serviceDetails)
            }
        },
    )

    if (error || loading) {
        console.log('An error ocurred: ' + error)
        return (
            <Section>
                <div className='grid grid-rows place-content-center'>
                    <Pulse />
                </div>
            </Section>
        )
    }

    const renderProjects = (projects: ProjectProps[] = []) => {
        return projects.map(p => {
            return (
                <ProjectTile
                    id={p.id}
                    clientName={p.client_name}
                    name={p.name}
                    description={p.description}
                    image={p.tile_image_url}
                    externalLink={p.other_resource}
                />
            )
        })
    }

    return (
        <div className='Service'>
            <PageBanner
                image={service ? service.background_banner_image_url : SOFTWARE_CONSULTING_BANNER_IMAGE_URL}
                title={service ? service.name : ''}
            />
            <Section>
                <div className='grid grid-rows-auto gap-16'>
                    <div className=''>
                        <Paragraph>
                            { service?.description || '' }
                        </Paragraph>
                    </div>
                    <div className='grid grid-flow-col auto-cols-max'>
                        <Subtitle>
                            { `${t(WHAT_WE_DO)}:` }
                        </Subtitle>
                    </div>
                    <div className=''>
                        <List items={serviceItems} />
                    </div>
                    <div className='hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                        <Button link='/'>
                            { t(CAN_YOU_PROVIDE_THESE_SERVICES, { ns: 'common' }) }
                        </Button>   
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                        <Button link='/service-packages'>
                            { t(VIEW_PRICING) }
                        </Button>   
                    </div>
                    <Subtitle>
                        { `${t(OUR_WORK, { ns: 'common' })}:` }
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