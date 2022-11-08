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
            <div className=''>
                {/* {project
                    ? (
                        <div
                            className='rounded-full bg-cover h-24 w-24 m-auto'
                            style={{ backgroundImage: `url(${person_image_url})` }}
                        />
                    ) : (
                        <div className='rounded-full bg-primary h-24 w-24 m-auto' />
                    )
                } */}
            </div>
            
            <div className=''>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

                </div>
                <Paragraph alignment='text-center'>
                    { testimony }
                </Paragraph>
            </div>
            <div className=''>
                <Subtitle variant='xs' alignment='text-center'>
                    { person_name }
                </Subtitle>
            </div>
            <div className='text-right'>
                
                <Paragraph variant='sm' alignment='text-right' color='primary'>
                        { project.name }
                        { project.logo_image_url}
                </Paragraph>
                
            </div>
        </div>
    )
}

export default TestimonialTile