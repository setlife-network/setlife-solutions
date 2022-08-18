import React from 'react'

interface ButtonProps {
    children: string,
    link: string,
    variant?: string
}

const variants = [
    {
        'primary': {
            'background': 'bg-light-gray',
            'border': 'border-2 border-light-gray',
            'color': 'text-primary'
        }
    },
    {
        'secondary': {
            'background': 'bg-solid-white',
            'border': 'border-2 border-primary',
            'color': 'text-primary'
        }
    }
]

const Button = ({
    children,
    link,
    variant
}: ButtonProps) => {

    const styleProps: any = Object.values(variants.filter(v => Object.keys(v)[0] == variant)[0])[0]

    return (
        <button 
            className={`Button rounded-full ${styleProps.background} ${styleProps.border} ${styleProps.color} px-8 py-4`}
            type='button'
        >
            <a href={link}>
                { children }
            </a>
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary'
}

export default Button