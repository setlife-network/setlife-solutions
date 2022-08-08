import React from 'react'

import TextProps from '../interfaces/TextProps'

const variants = [
    {
        'm': {
            'weight': 'font-light',
            'size': 'text-base'
        }
    },
    {
        'sm': {
            'weight': 'font-light',
            'size': 'text-sm'
        }
    }
]

const Paragraph = ({
    alignment,
    children,
    color,
    variant
}: TextProps) => {

    const styleProps: any = Object.values(variants.filter(v => Object.keys(v)[0] == variant)[0])[0]

    return (
        <div className={`Paragraph ${styleProps.weight} ${styleProps.size} text-${color} ${alignment}`}>
            { children }
        </div>
    )
}

Paragraph.defaultProps = {
    alignment: 'left',
    color: 'solid-black',
    variant: 'm'
}

export default Paragraph