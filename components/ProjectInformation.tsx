import { find } from 'lodash'

import ArrowIcon from './ArrowIcon'
import Button from './Button'
import Headline from './Headline'
import List from './List'
import Paragraph from './Paragraph'
import Subtitle from './Subtitle'

import {
    CAN_YOU_PROVIDE_THESE_SERVICES,
    SERVICES_PROVIDED
} from '../constants/strings'

import ItemProps from '../interfaces/ItemProps'
import ProjectDetailsProps from '../interfaces/ProjectDetailsProps'

interface ProjectInformationProps {
    description: string,
    projectDetails: ProjectDetailsProps[],
    projectLink: string,
    projectName: string
}

interface ProjectServiceProvided {
    type: string,
    items: ItemProps[]
}

const ProjectInformation = ({
    description,
    projectDetails,
    projectLink,
    projectName
}: ProjectInformationProps) => {

    const renderServicesProvided = (servicesProvided: ProjectServiceProvided[]) => {
        return servicesProvided.map(s => {
            return (
                <div className='mb-12'>
                    <div className='mb-8'>
                        <Headline variant='h2-semibold'>
                            { s.type }
                        </Headline>
                    </div>
                    <List items={s.items} />
                </div>
            )
        })
    }

    const servicesProvided: ProjectServiceProvided[] = []

    projectDetails.map(p => {
        if (p.sub_type == 'dedicated_development' || p.sub_type == 'production_grade') return
        if (find(servicesProvided, ['type', p.sub_type])) {
            const service = find(servicesProvided, ['type', p.sub_type])
            service.items.push({ bold: '', content: p.description })
            return
        }
        servicesProvided.push({
            type: p.sub_type,
            items: [
                { bold: '', content: p.description }
            ]
        })
    })

    return (
        <div className='ProjectInformation'>
            <div className='grid grid-rows-auto gap-8'>
                <div className='mt-12'>
                    <Headline variant='alternative'>
                        { description }
                    </Headline>
                </div>
                <div className='grid grid-flow-col auto-cols-max'>
                    <Subtitle>
                        { SERVICES_PROVIDED }
                    </Subtitle>
                </div>
                <div className=''>
                    { renderServicesProvided(servicesProvided) }
                </div>
                <div>
                    <div className='md:invisible grid grid-cols-1 mb-4'>
                        <Button link={projectLink} variant='dark'>
                            <div className='grid grid-flow-col auto-cols-max'>
                                {`${projectName.toUpperCase()}.COM`}
                                <ArrowIcon />
                            </div>
                        </Button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                        <Button link='/'>
                            { CAN_YOU_PROVIDE_THESE_SERVICES }
                        </Button>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInformation