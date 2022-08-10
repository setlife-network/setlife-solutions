import React from 'react'
import Headline from './Headline'

import {
    SETLIFE_OPERATES,
    ON_A_BITCOIN_STANDARD,
    CLICK_TO_LEARN_MORE
} from '../constants/strings'

const BitcoinOperation = ({}) => {
    return (
        <div className='bg-primary'>
            <div className='grid grid-rows-2 gap-6 mx-8 pt-12 md:mx-24 xl:mx-48 bg-bitcoin bg-no-repeat bg-right-bottom md:bg-right bg-auto md:bg-contain'>
                <div className=''>
                    <h1 className='text-2xl font-bold text-solid-white md:text-6xl'>
                        { SETLIFE_OPERATES }
                    </h1>
                    <h1 className='text-2xl font-bold text-solid-white md:text-6xl'>
                        { ON_A_BITCOIN_STANDARD }
                    </h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className=''>
                        <a href='/' className='text-base font-normal md:text-2xl'>
                            { CLICK_TO_LEARN_MORE } 
                        </a>
                    </div>
                    <div className='md:col-span-3'>
                        <a href='/'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mt-4 md:mt-3 md:w-6 md:h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BitcoinOperation