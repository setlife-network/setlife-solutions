import React from 'react'

import Text from './Text'
import Title from './Title'

import {
    MAKE_SOFTWARE,
    YOUR_SUPERPOWER,
    RATHER_THAN_DELIVERING_A_BLACKBOX
} from '../constants/strings'

const Hero = ({}) => {
    return (
        <div className='Hero grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-rows-2'>
                <div className=''>
                    <Title tone='setlife' variant='secondary'>
                        { MAKE_SOFTWARE }
                    </Title>
                    <Title tone='solid' variant='secondary'>
                        { YOUR_SUPERPOWER }
                    </Title>
                </div>
                <div className='mt-16'>
                    <Text>
                        { RATHER_THAN_DELIVERING_A_BLACKBOX }
                    </Text>
                </div>
            </div>
            <div className='grid' />
        </div>
    )
}

export default Hero