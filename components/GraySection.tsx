import React from 'react'

interface GraySectionProps {
    children: any
}

const GraySection = ({
    children
}: GraySectionProps) => {
    return (
        <div className='GraySection bg-light-gray px-8 md:px-24 xl:px-48 py-12'>
            { children }
        </div>
    )
}

export default GraySection