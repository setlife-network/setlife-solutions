import React from 'react';
import { useRouter } from 'next/router';

import ArrowLeftIcon from './ArrowLeftIcon';
import Headline from './Headline';

import { 
    GO_BACK,
} from '../constants/strings';

const GoBack = ({}) => {

    const router = useRouter()
    
    return (
        <div className='GoBack' onClick={() => router.back()}>
            <div className='grid grid-flow-col auto-cols-max'>
                <div className=''>
                    <ArrowLeftIcon />
                </div>
                <div className='ml-5 pb-1'>
                    <Headline variant='alternative'>
                        {` ${GO_BACK} `}
                    </Headline>
                </div>
            </div>
        </div>
    )
}

export default GoBack