import React from 'react'

const ArrowIcon = () => {
    return (
        <div className='ArrowIcon'>
            <svg 
                xmlns='http://www.w3.org/2000/svg' 
                className='my-auto inline ml-4 mt-1 h-4 w-4 md:mt-0 md:w-6 md:h-6' 
                fill='none' 
                viewBox='0 0 24 24' 
                stroke='currentColor' 
                strokeWidth={2}
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
        </div>
    )
}

export default ArrowIcon