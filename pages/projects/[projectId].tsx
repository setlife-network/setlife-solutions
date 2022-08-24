import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Section from '../../components/Section'
import ProjectImpact from '../../components/ProjectImpact'

const ProjectDetailPage: NextPage = () => {
    const router = useRouter()
    const { projectId } = router.query

    return (
        <div>
            <Section color='light-gray'>
                <ProjectImpact />
            </Section>
        </div>
    )
}

export default ProjectDetailPage