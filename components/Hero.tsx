import React from 'react'

import Text from './Text'
import Title from './Title'

const Hero = ({}) => {
    return (
        <div className='Hero grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-rows-2'>
                <div className=''>
                    <Title tone='setlife' variant='secondary'>
                        Make software
                    </Title>
                    <Title tone='solid' variant='secondary'>
                        your superpower
                    </Title>
                </div>
                <div className='mt-16'>
                    <Text>
                        Rather than delivering a software “blackbox”, SetLife’s solutions engineering process features thoughtful guidance and detailed documentation so you can develop & maintain your project in the future (with or without us!)
                    </Text>
                </div>
            </div>
            <div className='grid' />
        </div>
    )
}

export default Hero