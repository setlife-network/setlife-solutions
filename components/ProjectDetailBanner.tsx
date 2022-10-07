import React from 'react'

import ArrowIcon from './ArrowIcon'
import Button from './Button'

interface ProjectDetailBannerProps {
    backgroundImageUrl: string,
    deviceImageUrl: string,
    logoImageUrl: string,
    projectName: string,
    projectResource: string
}

const ProjectDetailBanner = ({
    projectResource,
    backgroundImageUrl,
    deviceImageUrl,
    logoImageUrl,
    projectName
}: ProjectDetailBannerProps) => {
    // Get just the domain + tld from project link
    const withoutHttps = projectResource.split('https://')[1]
    let splitLink = withoutHttps.split('.')
    const tld = splitLink.splice(-1)
    const domain = splitLink.splice(-1)
    const projectLinkText = `${domain}.${tld}`

    return (
        <div 
            className='ProjectDetailBanner h-100 py-8'
        >
            <div 
                className='banner grid grid-cols-1 md:grid-cols-2 auto-cols h-96 px-8' 
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className='mt-12'>
                    <img 
                        className='device-image' 
                        src={deviceImageUrl}
                        alt={projectName} 
                    />
                </div>
                <div 
                    className='grid grid-flow-row auto-rows-max xl:px-24 place-content-center gap-8 pb-12 invisible md:visible'
                >
                    <div className=''>
                        <img 
                            className='logo-image' 
                            src={logoImageUrl}
                            alt={projectName}  
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Button
                            variant='dark'
                            onClick={() => window.open(projectResource, '_blank')}
                        >
                            <div className='grid grid-flow-col auto-cols-max'>
                                {`${projectLinkText}`}
                                <ArrowIcon />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailBanner