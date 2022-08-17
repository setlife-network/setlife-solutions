import React from 'react'

import TextProps from '../interfaces/TextProps'

const variants = [
    {
        'm': {
            'weight': 'font-bold',
            'size': 'text-3xl'
        }
    },
    {
        's': {
            'weight': 'font-bold',
            'size': 'text-2xl'
        }
    }, 
    {
        'xs': {
            'weight': 'font-bold',
            'size': 'text-xl'
        }
    },
    {
        'xs-light': {
            'weight': 'font-light',
            'size': 'text-xl'
        }
    },
]

const Subtitle = ({
    alignment,
    children,
    color,
    variant
}: TextProps) => {

    const styleProps: any = Object.values(variants.filter(v => Object.keys(v)[0] == variant)[0])[0]

    return (
        <div className={`Subtitle ${styleProps.weight} ${styleProps.size} text-${color} ${alignment}`}>
            { children }
        </div>
    )
}

Subtitle.defaultProps = {
    alignment: 'text-left',
    color: 'solid-black',
    variant: 'm'
}

export default Subtitle