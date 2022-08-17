import React from 'react'

import Headline from './Headline'

interface PageBannerProps {
    image: string,
    title: string,
    titleAlignment?: string
}

const PageBanner = ({
    image,
    title,
    titleAlignment
}: PageBannerProps) => {

    return (
        // eslint-disable-next-line no-useless-concat
        <div 
            className='PageBanner flex items-end h-96 grid grid-rows'
            style={{backgroundImage: 'url(' + image + ')'}}
        >
            <div className='title-container bg-primary-alt grid grid-cols px-8 md:px-24 xl:px-48 py-8'>
                <div className=''>
                    <Headline color='solid-white' variant='xl' alignment={titleAlignment}>
                        { title }
                    </Headline>
                </div>
            </div>
        </div>
    )
}

PageBanner.defaultProps = {
    titleAlignment: 'left'
}

export default PageBanner