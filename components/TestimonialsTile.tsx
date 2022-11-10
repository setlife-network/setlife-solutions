import React from 'react'
import { useRouter } from 'next/router'

import Paragraph from './Paragraph'
import Subtitle from './Subtitle'


interface TestimonialsTileProps {
    person_name: string,
    testimony: string,
    person_image_url: string,
    project: {
        name: string,
        logo_image_url: string,
    }
    
}

const TestimonialTile = ({
    person_name,
    testimony,
    person_image_url,
    project

}: TestimonialsTileProps) => {
    const router = useRouter()

    return (
        <div
        className='TestimonialsTile grid grid-cols-1 gap-4 rounded-2xl border-solid border-2 rounded-lg border-primary  px-6 py-6 bg-solid-white'
            // onClick={() => {
            //     router.push(url)
            // }}
        >
            
            
        <div className='rounded-full bg-contain h-20 w-20 m-auto'
            style={{ backgroundImage: `url(${person_image_url})` }} 
        />
            
        <div className='flex flex-row'>
            {project.logo_image_url
                ? (
                    <div
                        className='rounded-full bg-contain h-20 w-20 m-left bg-no-repeat bg-center bg-black'
                            style={{ backgroundImage: `url(${project.logo_image_url})` }}
                    />
                    ) : (
                        <div className='rounded-full bg-primary h-24 w-24 m-auto' />
                    )
                }
            <div className=''>                
                <Subtitle variant='m' alignment='text-center' color='solid-black'>
                    { project.name }
                </Subtitle>
            </div>
            </div>     
            <div className=''>
                <Paragraph alignment='text-center'>
                    { testimony }
                </Paragraph>
            </div>
                <div className=''>
                    <Subtitle variant='s' alignment='text-center'>
                        { person_name }
                    </Subtitle>
                </div>            
            </div>
    )
}

export default TestimonialTile
