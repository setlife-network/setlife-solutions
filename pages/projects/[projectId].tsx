import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const ProjectDetailPage: NextPage = () => {
  const router = useRouter()
  const { projectId } = router.query
  return (
    <div>
      ProjectDetailPage: {projectId}
    </div>
  )
}

export default ProjectDetailPage