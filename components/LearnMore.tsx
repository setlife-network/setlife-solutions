import React from 'react';

import LearnMoreProps from '../interfaces/LearnMoreProps';
import Headline from './Headline'

const LearnMore = ({
    text,
    url
}: LearnMoreProps) => {

    return (
        <div className=''>
            <a href={url} className=''>
                <div className='grid grid-flow-col auto-cols-max'>
                    <div>
                        <Headline variant='alternative'>
                            { text }
                        </Headline>
                    </div>
                    <div>
                        <svg xmlns='http://www.w3.org/2000/svg' className='inline ml-4 mt-1 h-4 w-4 md:mt-0 md:w-6 md:h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default LearnMore