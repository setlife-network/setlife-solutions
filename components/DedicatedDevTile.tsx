import React from 'react'

import Headline from './Headline'

import { LAPTOP_ICON } from '../constants'

interface DedicatedDevTileProps {
    description: string
}

const DedicatedDevTile = ({
    description
}: DedicatedDevTileProps) => {

    return (
        <div className='grid grid-cols-1 gap-5 rounded-2xl p-8 bg-solid-white md:p-16'>
            <div className=''>
                <div className='rounded-full bg-primary h-24 w-24 m-auto'>
                    <img 
                        className='p-8'
                        src={LAPTOP_ICON}
                        alt='laptop'
                    />
                </div>    
            </div>
            <div className=''>
                <Headline variant='h1' alignment='text-center'>
                    { description }
                </Headline>
            </div>
        </div>
    )
}

export default DedicatedDevTile