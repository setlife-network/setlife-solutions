import { useTranslation } from 'next-i18next';

import ProjectTile from './ProjectTile'
import Subtitle from './Subtitle'

import ProjectProps from '../interfaces/ProjectProps'

import {
    YOU_MAY_ALSO_LIKE
} from '../constants/strings'

interface ProjectSimilarWorkProps {
    projects: ProjectProps[]
}

const ProjectSimilarWork = ({
    projects
}: ProjectSimilarWorkProps) => {

    const { t } = useTranslation('project')

    const renderProjects = (projects: ProjectProps[]) => {
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
        <div 
            className='ProjectSimilarWork'
        >
            <div className='grid grid-flow-col auto-cols-max mb-12'>
                <Subtitle>
                    {`${t(YOU_MAY_ALSO_LIKE)}:`}
                </Subtitle>
            </div>
            <div className=' grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-16 lg:gap-y-12 xl:gap-x-24 gap-y-6 xl:gap-y-16'>
                { renderProjects(projects) }
            </div>
        </div>
    )
}

export default ProjectSimilarWork