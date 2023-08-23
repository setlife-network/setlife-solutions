import React from 'react'
import { useTranslation } from 'next-i18next';

import Headline from './Headline'
import LearnMore from './LearnMore'

import { BITCOIN_BANNER_URL } from '../constants'

import {
    SETLIFE_OPERATES,
    ON_A_BITCOIN_STANDARD,
    CLICK_TO_LEARN_MORE
} from '../constants/strings'

const BitcoinOperation = ({}) => {
    const { t } = useTranslation('home')

    return (
        <div className='BitcoinOperation bg-bitcoin bg-no-repeat bg-right-bottom md:bg-right bg-44 md:bg-contain'>
            <div className='grid grid-rows-2 gap-6 pt-12'>
                <div className=''>
                    <Headline variant='xxl' color='solid-white' alignment='text-left'>
                        { t(SETLIFE_OPERATES) }
                    </Headline>
                    <Headline variant='xxl' color='solid-white' alignment='text-left'>
                        { t(ON_A_BITCOIN_STANDARD) }
                    </Headline>
                </div>
                <div className=''>
                    <LearnMore text={t(CLICK_TO_LEARN_MORE)} url={BITCOIN_BANNER_URL} newTab />
                </div>
            </div>
        </div>
    )
}

export default BitcoinOperation