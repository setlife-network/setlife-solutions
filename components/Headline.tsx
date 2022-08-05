import React from 'react'

interface HeadlineProps {
    children: string,
    alignment?: string,
    color?: string,
    variant?: string,
}

interface StyleProps {
    weight: string,
    size: string
}

interface variantsProps {
    variant: string
}

const variants = [
    {'xxl': {
        'weight': 'font-bold',
        'size': 'text-5xl lg:text-6xl'
    }},
    {'xl': {
        'weight': 'font-bold',
        'size': 'text-3xl lg:text-4xl'
    }}, 
    {'l': {
        'weight': 'font-normal',
        'size': 'text-2xl'
    }}
]

const Headline = ({
    alignment,
    children,
    color,
    variant
}: HeadlineProps) => {

    const styleProps: any = Object.values(variants.filter(v => Object.keys(v)[0] == variant)[0])[0]

    return (
        <div className={`Headline ${styleProps.weight} ${styleProps.size} text-${color} ${alignment}`}>
            { children }
        </div>
    )
}

Headline.defaultProps = {
    alignment: 'left',
    color: 'solid-black',
    variant: 'l'
}

export default Headline