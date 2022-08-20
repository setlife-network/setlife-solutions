import type { NextPage } from 'next'

import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Subtitle from '../../components/Subtitle'

const ServicePackagesPage: NextPage = () => {

    const renderServicePackages = (servicePackages: any[]) => {
        return servicePackages.map(service => {
            return (
                <div className='service bg-solid-white p-8 rounded-lg'>
                    <div className='grid grid-flow-row auto-rows-max gap-8'>
                        <div className='rounded-full bg-primary h-24 w-24 m-auto' />
                        <Subtitle variant='s' alignment='text-center'>
                            Code Review & Technical Assessment
                        </Subtitle>
                        <Paragraph>
                            SetLife will dedicate a software solutions engineer to review the codebase and architecture  of your existing system.  
                        </Paragraph>
                        <Paragraph>
                            A Technical Assessment will be provided as documentation that explains which technologies are used in the system and how they are implemented. This document will also provide some measure of code quality and technical debt that will determine howdifficulty it would be to continue building  onto the existing system.
                        </Paragraph>
                        <Paragraph color='primary'>
                            2 meetings
                        </Paragraph>
                        <Paragraph alignment='text-center' color='primary'>
                            Estimated cost
                        </Paragraph>
                        <Paragraph alignment='text-center' color='primary' variant='m-bold'>
                          $500 - $3,000
                        </Paragraph>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className='ServicePackages'>
            <Section>
                <div className='grid grid-flow-row auto-rows-max gap-12'>
                    <Subtitle>
                       Service Packages
                    </Subtitle>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </Paragraph>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <Button variant='secondary' link='/'>
                            Go to Schedule Consultation form
                        </Button>
                    </div>
                </div>
            </Section>
            <Section color='light-gray'>
                <div className='grid grid-cols-3 gap-4'>
                    { renderServicePackages([]) }
                </div>
            </Section>
        </div>
    )
}

export default ServicePackagesPage