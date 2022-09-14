import React from 'react'

interface SectionProps {
    children: any,
    color?: string,
    paddingBottom?: string,
    paddingTop?: string
}

const Section = ({
    children,
    color,
    paddingBottom,
    paddingTop,
}: SectionProps) => {
    return (
        <div className={`Section bg-${color} px-8 md:px-24 xl:px-48 ${paddingBottom} ${paddingTop}`}>
            { children }
        </div>
    )
}

Section.defaultProps = {
    color: 'solid-white',
    paddingBottom: 'pb-12',
    paddingTop: 'pt-12',
}

export default Section