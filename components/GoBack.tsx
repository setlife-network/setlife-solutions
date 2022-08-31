import React, { useState } from 'react';
import ArrowLeftIcon from './ArrowLeftIcon';
import Headline from './Headline';

import { 
    GO_BACK_TO,
    PORTFOLIO,
    HOME
} from '../constants/strings';

const GoBack = ({
    router
}: any) => {
    
    const [lastUrl, setLastUrl] = useState(router.includes('project') ? '/projects' : '/')
    const [lastUrlName, setLastUrlName] = useState(router.includes('project') ? PORTFOLIO : HOME)

    return (
        <div className='GoBack'>
            <a href={lastUrl}>
                <div className='grid grid-flow-col auto-cols-max'>
                    <div className=''>
                        <ArrowLeftIcon />
                    </div>
                    <div className='ml-5 pb-1'>
                        <Headline variant='alternative'>
                            {` ${GO_BACK_TO} ${lastUrlName} `}
                        </Headline>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default GoBack