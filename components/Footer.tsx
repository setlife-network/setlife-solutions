import React from 'react'
import Headline from './Headline'

import { 
    FOOT_ITEMS,
    SETLIFE_NETWORK_URL,
} from '../constants'
import {
    SETLIFE,
    SOLUTIONS,
    SETLIFE_SOLUTIONS_COPYRIGHT,
    SETLIFE_NETWORK,
} from '../constants/strings'

const Footer = ({}) => {

    const renderFootItems = () => {
        return (
            FOOT_ITEMS.map(item => {
                return (
                    <a 
                        href={item.url}
                        rel='noopener noreferrer'
                        target='_blank'
                        className='mx-8 self-center md:mx-6'
                    >
                        <img src={item.logo} alt={item.name} />
                    </a>
                ) 
            })
        )
    }

    return (
        <footer className='Footer bg-solid-black px-8 md:px-24 xl:px-48 py-4 items-center md:flex'>
            <div className='hidden md:ml-5 md:flex w-auto'>
                <Headline variant='h2-semibold' color='solid-white'>
                    { SETLIFE }
                </Headline>
                <Headline variant='h2-thin' color='primary'>
                    { SOLUTIONS }
                </Headline>
            </div>
            <div className='w-full flex justify-center mb-5 md:hidden'>
                <a 
                    href={SETLIFE_NETWORK_URL}
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <Headline variant='h2-semibold' color='solid-white'>
                        { SETLIFE_NETWORK }
                    </Headline>
                </a>
            </div>
            <div className='hidden md:w-8/12 md:ml-4 md:mt-2 md:flex '>
                <Headline variant='xs' color='solid-white'>
                    { SETLIFE_SOLUTIONS_COPYRIGHT }
                </Headline>
            </div>
            <div className='w-full flex justify-center md:w-3/12 md:justify-end'>
                { renderFootItems() }
            </div>
        </footer>
    )
}

export default Footer