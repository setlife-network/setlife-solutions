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
            className='TestimonialsTile grid grid-cols-1 gap-4 rounded-2xl border-solid border rounded-lg border-primary p-8 bg-solid-white'
            // onClick={() => {
            //     router.push(url)
            // }}
        >  
            <div 
                className='rounded-full bg-contain h-20 w-20 m-auto'
                style={{ backgroundImage: `url(${person_image_url})` }} 
            />
            <div className='flex gap-4 justify-items-center m-auto '>
                {project.logo_image_url
                    ? (
                        <div
                            className='rounded-full bg-contain h-9 w-9 m-left bg-no-repeat bg-center bg-black'
                            style={{ backgroundImage: `url(${project.logo_image_url})` }}
                        />
                    ) : (
                        <div className='rounded-full bg-primary h-24 w-24 m-auto' />
                    )
                }
                <div className='w-fit'>                
                    <Subtitle variant='s' alignment='text-center' color='solid-black'>
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
                <Subtitle variant='xs' alignment='text-center'>
                    { person_name }
                </Subtitle>
            </div>            
        </div>
    )
}

export default TestimonialTile
