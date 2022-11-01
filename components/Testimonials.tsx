import React from 'react'
// import { useQuery } from '@apollo/client'

import Pulse from './Pulse'
import Headline from './Headline'
import { TESTIMONIALS } from '../constants/strings'
// import ServiceTile from './ServiceTile'

// import ServiceProps from '../interfaces/ServiceProps'

// Keep working on this file changing to testimonials Tile & Props

const Testimonials = () => {
    return (
                
        <div className='mb-12'>
            <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                { TESTIMONIALS }
            </Headline>
        </div>
        
    )
}

export default Testimonials