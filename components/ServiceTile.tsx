import React from 'react'
import { useRouter } from 'next/router'

import Paragraph from './Paragraph'
import Subtitle from './Subtitle'

import { SEE_MORE } from '../constants/strings' 

interface ServiceTileProps {
    name: string,
    description: string,
    url: string
}

const ServiceTile = ({
    name,
    description,
    url
}: ServiceTileProps) => {
    const router = useRouter()

    return (
        <div
            className='ServiceTile grid grid-cols-1 gap-4 rounded-2xl px-6 py-6 bg-solid-white'
            onClick={() => {
                router.push(url)
            }}
        >
            <div className=''>
                <div className='rounded-full bg-primary h-24 w-24 m-auto' />
            </div>
            <div className=''>
                <Subtitle variant='xs' alignment='text-center'>
                    { name }
                </Subtitle>
            </div>
            <div className=''>
                <Paragraph alignment='text-center'>
                    { description }
                </Paragraph>
            </div>
            <div className='text-right'>
                <a href={url}>
                    <Paragraph variant='sm' alignment='text-right' color='primary'>
                        { SEE_MORE }
                    </Paragraph>
                </a>
            </div>
        </div>
    )
}

export default ServiceTile