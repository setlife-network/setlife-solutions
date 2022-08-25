import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'

import Headline from '../../components/Headline'
import PageBanner from '../../components/PageBanner'
import Section from '../../components/Section'
import ProjectTile from '../../components/ProjectTile'

import ProjectProps from '../../interfaces/ProjectProps'

import { GET_PROJECTS } from '../../operations/queries/ProjectQueries'

import { 
    OUR_WORK,
    PORTFOLIO
} from '../../constants/strings'
import { PROJECTS_BANNER_IMAGE_URL } from '../../constants'

interface getProjects {
    fetchProjects: ProjectProps[]
}

const ProjectsPage: NextPage = () => {

    const { error, data, loading } = useQuery<getProjects>(
        GET_PROJECTS
    )

    if (error || loading) {
        return (
            <>
            </>
        )
    }

    const projects = [...data!.fetchProjects]

    const renderProjects = () => {
        return projects.map(p => {
            return (
                <ProjectTile
                    id={p.id}
                    clientName={p.client_name}
                    name={p.name}
                    description={p.description}
                    image={p.tile_image_url}
                />
            )
        })
    }

    return (
        <div className='ProjectsPage'>
            <PageBanner
                image={PROJECTS_BANNER_IMAGE_URL}
                title={PORTFOLIO}
                titleAlignment='text-center'
            />
            <Section>
                <div className='grid grid-flow-row'>
                    <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                        { OUR_WORK }
                    </Headline>
                    <div 
                        className='grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-16 lg:gap-y-12 xl:gap-x-24 gap-y-6 xl:gap-y-16 mt-12'
                    >
                        { renderProjects() }
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default ProjectsPage