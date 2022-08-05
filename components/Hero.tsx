import React from 'react'

import Text from './Text'
import Headline from './Headline'

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
                    <Headline variant='xxl' color='solid-black' alignment='text-center md:text-left'>
                        { MAKE_SOFTWARE }
                    </Headline>
                    <Headline variant='xxl' color='primary' alignment='text-center md:text-left'>
                        { YOUR_SUPERPOWER }
                    </Headline>
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