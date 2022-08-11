import React from 'react'

import Headline from './Headline'

import {
    SETLIFE_OPERATES,
    ON_A_BITCOIN_STANDARD,
    CLICK_TO_LEARN_MORE
} from '../constants/strings'
import LearnMore from './LearnMore'

const BitcoinOperation = ({}) => {
    return (
        <div className='bg-primary'>
            <div className='bg-bitcoin bg-no-repeat mr-8 bg-right-bottom md:mr-24 md:bg-right bg-44 md:bg-contain'>
                <div className='grid grid-rows-2 gap-6 mx-8 pt-12 md:mx-24 xl:mx-48'>
                    <div className=''>
                        <Headline variant='xxl' color='solid-white' alignment='text-left'>
                            { SETLIFE_OPERATES }
                        </Headline>
                        <Headline variant='xxl' color='solid-white' alignment='text-left'>
                            { ON_A_BITCOIN_STANDARD }
                        </Headline>
                    </div>
                    <div className=''>
                        <LearnMore text={CLICK_TO_LEARN_MORE} url='/' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BitcoinOperation