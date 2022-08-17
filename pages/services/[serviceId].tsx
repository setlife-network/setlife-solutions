import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Service: NextPage = () => {
    const router = useRouter()
    const { serviceId } = router.query
    return (
        <div className='Service'>
            <div className='grid grid-row'>
                <div className='grid grid-cols-auto'>
                  
                </div>
            </div>
        </div>
    )
}

export default Service