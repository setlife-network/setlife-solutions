import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import ProjectDetailBanner from '../../components/ProjectDetailBanner'

const ProjectDetailPage: NextPage = () => {
    const router = useRouter()
    const { projectId } = router.query
    return (
        <div className='ProjectDetailPage'>
            <ProjectDetailBanner
                backgroundImageUrl={}
                deviceImageUrl={}
                logoImageUrl={}
                projectName={}
            />
          
        </div>
    )
}

export default ProjectDetailPage