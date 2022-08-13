import React from 'react'

import Headline from './Headline'

interface PageBannerProps {
    image: string,
    title: string
}

const PageBanner = ({
    image,
    title
}: PageBannerProps) => {

    return (
        // eslint-disable-next-line no-useless-concat
        <div 
            className='PageBanner flex items-end h-96 grid grid-rows'
            style={{backgroundImage: 'url(' + image + ')'}}
        >
            <div className='title-container bg-primary-alt grid grid-cols px-12 py-8'>
                <div className=''>
                    <Headline color='solid-white' variant='xl'>
                        { title }
                    </Headline>
                </div>
            </div>
        </div>
    )
}

export default PageBanner