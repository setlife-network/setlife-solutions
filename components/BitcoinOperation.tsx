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
        <div className='BitcoinOperation bg-bitcoin bg-no-repeat bg-right-bottom md:bg-right bg-44 md:bg-contain'>
            <div className='grid grid-rows-2 gap-6 pt-12'>
                <div className=''>
                    <Headline variant='l' variant_md='xxl' color='solid-white' alignment='text-left'>
                        { SETLIFE_OPERATES }
                    </Headline>
                    <Headline variant='l' variant_md='xxl' color='solid-white' alignment='text-left'>
                        { ON_A_BITCOIN_STANDARD }
                    </Headline>
                </div>
                <div className=''>
                    <LearnMore text={CLICK_TO_LEARN_MORE} url='/' />
                </div>
            </div>
        </div>
    )
}

export default BitcoinOperation