import React from 'react'

interface GraySectionProps {
    children: any,
    color: string
}

const Section = ({
    children,
    color
}: GraySectionProps) => {
    return (
        <div className={`Section bg-${color} px-8 md:px-24 xl:px-48 py-12`}>
            { children }
        </div>
    )
}

export default Section