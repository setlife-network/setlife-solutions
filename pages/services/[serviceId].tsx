import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Services: NextPage = () => {
    const router = useRouter()
    const { serviceId } = router.query
    return (
        <div>
      Services: {serviceId}
        </div>
    )
}

export default Services