import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import PageBanner from '../../components/PageBanner'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Subtitle from '../../components/Subtitle'

import { SOFTWARE_CONSULTING_BANNER_IMAGE_URL } from '../../constants'

const Service: NextPage = () => {
    const router = useRouter()
    const { serviceId } = router.query
    return (
        <div className='Service'>
            <PageBanner
                // TODO: Change this for service banner_image_url
                image={SOFTWARE_CONSULTING_BANNER_IMAGE_URL}
                title='Software Constulting'
            />
            <Section>
                <div className='grid grid-rows-auto gap-8'>
                    <Paragraph>
                        This is the best place to start if you just need some basic technical advisement on how to get your project going
                    </Paragraph>
                    <Subtitle>
                        What we do:
                    </Subtitle>
                </div>
            </Section>
        </div>
    )
}

export default Service