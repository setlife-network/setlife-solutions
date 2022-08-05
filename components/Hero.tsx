import React from 'react'

import Text from './Text'
import Title from './Title'

import {
    MAKE_SOFTWARE,
    YOUR_SUPERPOWER,
    RATHER_THAN_DELIVERING_A_BLACKBOX
} from '../constants/strings'

import {
    HERO_IMAGE_URL
} from '../constants'

const Hero = ({}) => {
    return (
        <div className='Hero grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-rows-2 px-2 lg:px-4'>
                <div className=''>
                    <Title tone='setlife' variant='secondary'>
                        { MAKE_SOFTWARE }
                    </Title>
                    <Title tone='solid' variant='secondary'>
                        { YOUR_SUPERPOWER }
                    </Title>
                </div>
                <div className='mt-8 xl:mt-0'>
                    <Text>
                        { RATHER_THAN_DELIVERING_A_BLACKBOX }
                    </Text>
                </div>
            </div>
            <div className='grid px-2 lg:px-4 max-w-md md:max-w-lg place-content-center mt-12 md:mt-0 m-auto'>
                <img src={HERO_IMAGE_URL} alt='Hero' />
            </div>
        </div>
    )
}

export default Hero