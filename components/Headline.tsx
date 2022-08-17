import React from 'react'

import TextProps from '../interfaces/TextProps'

const variants = [
    {
        'xxl': {
            'weight': 'font-bold',
            'size': 'text-6xl'
        }
    },
    {
        'xl': {
            'weight': 'font-bold',
            'size': 'text-5xl'
        }
    }, 
    {
        'l': {
            'weight': 'font-normal',
            'size': 'text-4xl'
        }
    },
    {
        'h1': {
            'weight': 'font-bold',
            'size': 'text-3xl'
        }
    },
    {
        'h2': {
            'weight': 'font-bold',
            'size': 'text-2xl'
        }
    }, 
    {
        'h2-semibold': {
            'weight': 'font-semibold',
            'size': 'text-2xl'
        }
    },
    {
        'h2-thin': {
            'weight': 'font-thin',
            'size': 'text-2xl'
        }
    },
    {
        'alternative': {
            'weight': 'font-normal',
            'size': 'text-3xl'
        }
    },
    {
        'xs': {
            'weight': 'font-normal',
            'size': 'text-xs'
        }
    }
]

const Headline = ({
    alignment,
    children,
    color,
    variant
}: TextProps) => {

    const styleProps: any = Object.values(variants.filter(v => Object.keys(v)[0] == variant)[0])[0]

    return (
        <div className={`Headline ${styleProps.weight} ${styleProps.size} text-${color} ${alignment}`}>
            { children }
        </div>
    )
}

Headline.defaultProps = {
    alignment: 'text-left',
    color: 'solid-black',
    variant: 'l'
}

export default Headline