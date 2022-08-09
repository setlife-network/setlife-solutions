import React from 'react'
import Headline from './Headline'

import {
    SETLIFE_OPERATES,
    ON_A_BITCOIN_STANDARD,
    CLICK_TO_LEARN_MORE
} from '../constants/strings'

import {
    BITCOIN_IMAGE_URL
} from '../constants'

const BitcoinOperation = ({}) => {
    return (
        <div className='grid grid-cols-3 bg-primary'>
            <div className='grid grid-rows-2 col-span-2 ml-8 pt-12 md:ml-24 xl:ml-48'>
                <div className=''>
                    <Headline variant='xxl' color='solid-white'>
                        { SETLIFE_OPERATES }
                    </Headline>
                    <Headline variant='xxl' color='solid-white'>
                        { ON_A_BITCOIN_STANDARD }
                    </Headline>
                </div>
                <div className=''>
                    <Headline variant='alternative' color='solid-white'>
                        { CLICK_TO_LEARN_MORE }
                    </Headline>
                </div>
            </div>
            <div className='grid text-center pt-5 mr-8 pt-12 md:mr-24 xl:mr-48'>
                <img src={BITCOIN_IMAGE_URL} alt='Bitcoin' />
            </div>
        </div>
    )
}

export default BitcoinOperation