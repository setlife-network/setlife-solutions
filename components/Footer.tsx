import React from 'react'
import Headline from './Headline'

import { FOOT_ITEMS } from '../constants'
import {
    SETLIFE,
    SOLUTIONS,
    SETLIFE_SOLUTIONS_COPYRIGHT,
    SETLIFE_NETWORK
} from '../constants/strings'

const renderFootItems = () => {
    return (
        FOOT_ITEMS.map((n, i) => {
            const logoName = n.substring(50).replace('.png', '')
            return (
                <a 
                    href='/' 
                    key={i}
                    className='mx-8 self-center md:mx-6'
                >
                    <img src={n} alt={logoName} />
                </a>
            )
        })
    )
}

const Footer = ({}) => {
    return (
        <footer className='bg-solid-black px-4 py-4 h-100 items-center md:flex'>
            <div className='hidden md:ml-5 md:w-1/12 md:flex'>
                <Headline variant='h2-semibold' color='solid-white'>{ SETLIFE }</Headline>
                <Headline variant='h2-thin' color='primary'>{ SOLUTIONS }</Headline>
            </div>
            <div className='w-full flex justify-center mb-5 md:hidden'>
                <Headline variant='h2-semibold' color='solid-white'>{ SETLIFE_NETWORK }</Headline>
            </div>
            <div className='hidden md:w-8/12 md:ml-12 md:mt-2 md:flex'>
                <Headline variant='xs' color='solid-white'>{ SETLIFE_SOLUTIONS_COPYRIGHT }</Headline>
            </div>
            <div className='w-full flex justify-center md:w-3/12 md:justify-end'>
                { renderFootItems() }
            </div>
        </footer>
    )
}

export default Footer