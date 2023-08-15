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
                    <div>
                        <a 
                            href={item.url}
                            rel='noopener noreferrer'
                            target='_blank'
                            className=''
                        >
                            <img src={item.logo} alt={item.name} />
                        </a>
                    </div>
                ) 
            })
        )
    }

    return (
        <footer className='Footer grid grid-cols-1 md:grid-cols-2 bg-solid-black px-8 md:px-24 xl:px-48 py-4 items-center flex justify-between'>
            <div className='invisible md:visible grid grid-flow-col auto-cols-max w-auto'>
                <Headline variant='h2-semibold' color='solid-white' alignment='text-right'>
                    { SETLIFE }
                </Headline>
                <Headline variant='h2-thin' color='primary'>
                    { SOLUTIONS }
                </Headline>
            </div>
            <div className='grid grid-flow-col justify-center mb-5 md:hidden'>
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
            <div className='hidden'>
                <Headline variant='xs' color='solid-white'>
                    { SETLIFE_SOLUTIONS_COPYRIGHT }
                </Headline>
            </div>
            <div className='grid grid-flow-col auto-cols-max gap-8 justify-center md:justify-end'>
                { renderFootItems() }
            </div>
        </footer>
    )
}

export default Footer