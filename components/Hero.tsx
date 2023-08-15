import React from 'react'

import Button from './Button'
import Headline from './Headline'
import Paragraph from './Paragraph'

import {
    MAKE_SOFTWARE,
    YOUR_SUPERPOWER,
    RATHER_THAN_DELIVERING_A_BLACKBOX,
    SCHEDULE_CONSULTATION,
    CONSULTATION
} from '../constants/strings'

import {
    HERO_IMAGE_URL
} from '../constants'

const Hero = ({}) => {
    return (
        <div className='Hero grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-flow-row auto-rows-max px-2 lg:px-4 place-content-center gap-12 md:gap-16'>
                <div className=''>
                    <Headline variant='xl' color='solid-black' alignment='text-center md:text-left'>
                        { MAKE_SOFTWARE }
                    </Headline>
                    <Headline variant='xl' color='primary' alignment='text-center md:text-left'>
                        { YOUR_SUPERPOWER }
                    </Headline>
                </div>
                <div className=''>
                    <Paragraph alignment='text-center md:text-left'>
                        { RATHER_THAN_DELIVERING_A_BLACKBOX }
                    </Paragraph>
                </div>
                <div className='text-center md:text-left'>
                    <Button variant='tertiary' link={CONSULTATION.toLowerCase()} className='px-8'>
                        {SCHEDULE_CONSULTATION.toUpperCase()}
                    </Button>
                </div>
            </div>
            <div className='hidden md:grid grid-cols-1 px-2 lg:px-4 max-w-md md:max-w-lg mt-12 md:mt-0 m-auto h-full place-items-center'>
                <img src={HERO_IMAGE_URL} alt='Hero' />
            </div>
        </div>
    )
}

export default Hero