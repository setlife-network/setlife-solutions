import type { GetStaticProps, NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import ServicePackageTile from '../../components/ServicePackageTile'
import Subtitle from '../../components/Subtitle'
import Pulse from '../../components/Pulse'

import { GET_SERVICE_PACKAGES } from '../../operations/queries/ServicePackagesQueries'

import ServicePackageProps from '../../interfaces/ServicePackageProps'

import {
    THE_SAMPLE_SERVICE_PACKAGES_LISTED_BELOW,
    SCHEDULE_CONSULTATION,
    SERVICE_PACKAGES,
    CONSULTATION
} from '../../constants/strings'

interface getServicePackages {
  fetchServicePackages: ServicePackageProps[]
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'packages'])),
    },
})

const ServicePackagesPage: NextPage = () => {

    const { t } = useTranslation('packages')

    const { error, data, loading } = useQuery<getServicePackages>(
        GET_SERVICE_PACKAGES
    )

    if (error || loading) {
        return (
            <Section>
                <div className='grid grid-rows place-content-center'>
                    <Pulse />
                </div>
            </Section>
        )
    }

    const servicePackages = [...data!.fetchServicePackages]

    const renderServicePackages = (servicePackages: ServicePackageProps[]) => {
        return servicePackages.map((service, idx) => {
            return (
                <ServicePackageTile servicePackage={service} idx={idx + 1} key={service.id} />
            )
        })
    }

    return (
        <div className='ServicePackages'>
            <Section>
                <div className='grid grid-flow-row auto-rows-max gap-12'>
                    <Subtitle>
                        { t(SERVICE_PACKAGES, { 'ns': 'common' }) }
                    </Subtitle>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <Paragraph>
                            { t(THE_SAMPLE_SERVICE_PACKAGES_LISTED_BELOW) }
                        </Paragraph>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <Button variant='secondary' link={CONSULTATION}>
                            { t(SCHEDULE_CONSULTATION, { 'ns': 'common' }) }
                        </Button>
                    </div>
                </div>
            </Section>
            <Section color='light-gray'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    { renderServicePackages(servicePackages) }
                </div>
            </Section>
        </div>
    )
}

export default ServicePackagesPage