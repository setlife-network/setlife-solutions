import React from 'react'

import {
    SETLIFE_OPERATES,
    ON_A_BITCOIN_STANDARD,
    CLICK_TO_LEARN_MORE
} from '../constants/strings'
import LearnMore from './LearnMore'

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
                <div className=''>
                    <LearnMore text={CLICK_TO_LEARN_MORE} url='/' />
                </div>
            </div>
        </div>
    )
}

export default BitcoinOperation