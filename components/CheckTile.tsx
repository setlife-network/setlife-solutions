import React from 'react'

import Paragraph from './Paragraph'

interface CheckTileProps {
    additional_notice: string
}

const CheckTile = ({
    additional_notice
}: CheckTileProps) => {

    return (
        <div className='CheckTile grid grid-cols-12'>
            <div className='col-span-2 my-auto mr-auto'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' viewBox='0 0 20 20' fill='#12CC46'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
            </div>
            <div className='col-span-9'>
                <Paragraph>
                    { additional_notice }
                </Paragraph>
            </div>
        </div> 
    )
}

export default CheckTile