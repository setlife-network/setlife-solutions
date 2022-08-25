import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { remove, findIndex, shuffle } from 'lodash'

import { GET_PROJECT, GET_PROJECTS } from '../../operations/queries/ProjectQueries'

import ProjectInformation from '../../components/ProjectInformation'
import ProjectDetailBanner from '../../components/ProjectDetailBanner'
import ProjectSimilarWork from '../../components/ProjectSimilarWork'
import Section from '../../components/Section'
import ProjectImpact from '../../components/ProjectImpact'
import ProjectTitle from '../../components/ProjectTitle'

import ProjectProps from '../../interfaces/ProjectProps'

interface getProject {
    fetchProject: ProjectProps
}

interface getRelatedProjects {
    fetchProjects: ProjectProps[]
}

const ProjectDetailPage: NextPage = () => {

    const router = useRouter()
    const projectId = parseInt(router.query.projectId as string, 10)

    const [project, setProject] = useState<ProjectProps>()
    const [relatedProjects, setRelatedProjects] = useState<ProjectProps[]>()

    const { error, data, loading } = useQuery<getProject>(
        GET_PROJECT,
        { 
            variables: { projectId },
            onCompleted: payload => {
                setProject(payload.fetchProject)
            }
        },
    )

    const { 
        error: projectsError, 
        data: projectsData, 
        loading: projectsLoading 
    } = useQuery<getRelatedProjects>(
        GET_PROJECTS,
        { 
            variables: { projectId },
            onCompleted: payload => {
                const projects = payload.fetchProjects
                const filteredProjects: ProjectProps[] = []
                projects.map(p => {
                    if (p.id != projectId) filteredProjects.push(p)
                })
                setRelatedProjects(shuffle(filteredProjects).slice(0, 3))
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

    const {
        background_banner_image_url = '',
        description = '',
        device_image_url = '',
        logo_image_url = '',
        name = '',
        projectDetails = [],
        project_resource = ''
    } = project || {}

    return (

        <div className='ProjectDetailPage'>
            <Section paddingBottom='' paddingTop='pt-8'>
                <ProjectTitle title={name} />
            </Section>
            <ProjectDetailBanner
                backgroundImageUrl={background_banner_image_url}
                deviceImageUrl={device_image_url}
                logoImageUrl={logo_image_url}
                projectName={name}
                projectResource={project_resource}
            />
            <Section>
                <ProjectInformation 
                    description={description}
                    projectDetails={projectDetails}
                    projectLink={project_resource}
                    projectName={name}
                />
            </Section>
            <Section color='light-gray'>
                <ProjectImpact 
                    projectDetails={projectDetails}
                />
            </Section>
            <Section>
                <ProjectSimilarWork
                    projects={relatedProjects || []}
                />
            </Section>
        </div>
    )
}

export default ProjectDetailPage