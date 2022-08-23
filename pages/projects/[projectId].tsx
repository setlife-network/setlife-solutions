import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_PROJECT } from '../../operations/queries/ProjectQueries'

import ProjectDetailBanner from '../../components/ProjectDetailBanner'

import ProjectProps from '../../interfaces/ProjectProps'

interface getProject {
    fetchProject: ProjectProps
}

const ProjectDetailPage: NextPage = () => {

    const router = useRouter()
    const projectId = parseInt(router.query.projectId as string, 10)

    const [project, setProject] = useState<ProjectProps>()

    const { error, data, loading } = useQuery<getProject>(
        GET_PROJECT,
        { 
            variables: { projectId },
            onCompleted: payload => {
                setProject(payload.fetchProject)
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
        device_image_url = '',
        logo_image_url = '',
        name = '',
        project_resource = ''
    } = project || {}

    return (

        <div className='ProjectDetailPage'>
            <ProjectDetailBanner
                backgroundImageUrl={background_banner_image_url}
                deviceImageUrl={device_image_url}
                logoImageUrl={logo_image_url}
                projectName={name}
                projectResource={project_resource}
            />
          
        </div>
    )
}

export default ProjectDetailPage