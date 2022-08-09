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
            <div className='grid grid-rows-2 gap-6 mx-8 pt-12 md:mx-24 xl:mx-48 bg-bitcoin bg-no-repeat bg-right bg-contain'>
                <div className=''>
                    <Headline variant='xxl' color='solid-white'>
                        { SETLIFE_OPERATES }
                    </Headline>
                    <Headline variant='xxl' color='solid-white'>
                        { ON_A_BITCOIN_STANDARD }
                    </Headline>
                </div>
                <div className=''>
                    <Headline variant='alternative' color='solid-black'>
                        { CLICK_TO_LEARN_MORE }
                    </Headline>
                </div>
            </div>
        </div>
    )
}

export default BitcoinOperation