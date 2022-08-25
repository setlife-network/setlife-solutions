import React from 'react'
import { THUMBS_ICON } from '../constants'
import { PRODUCTION_GRADE } from '../constants/strings'
import Paragraph from './Paragraph'

import Subtitle from './Subtitle'

interface ProductionGradeTileProps {
    description: string
}

const ProductionGradeTile = ({
    description
}: ProductionGradeTileProps) => {

    return (
        <div className='grid grid-cols-1 gap-5 rounded-2xl p-8 bg-solid-white md:p-16'>
            <div className='mt-10'>
                <div className='rounded-full bg-solid-black h-24 w-24 m-auto'>
                    <div>
                        <img 
                            className='p-8'
                            src={THUMBS_ICON}
                            alt='thumbs'
                        />
                    </div>
                </div>    
            </div>
            <div className=''>
                <Subtitle variant='xs' alignment='text-center'>
                    { PRODUCTION_GRADE }
                </Subtitle>
            </div>
            <div className=''>
                <Paragraph alignment='text-center'>
                    { description }
                </Paragraph>
            </div>
        </div>
    )
}

export default ProductionGradeTile