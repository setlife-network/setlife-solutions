import React, { MouseEventHandler } from 'react'

interface ButtonProps {
    children: any,
    link?: string | undefined,
    variant?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler | undefined,
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
    }, 
    {
        'tertiary': {
            'background': 'bg-primary',
            'border': '',
            'color': 'text-solid-white'
        }
    },
    {
        'dark': {
            'background': 'bg-solid-black',
            'color': 'text-solid-white' 
        }
    }
]

const Button = ({
    children,
    link,
    variant,
    disabled,
    onClick,
}: ButtonProps) => {

    const styleProps: any = Object.values(variants.filter(v => Object.keys(v)[0] == variant)[0])[0]

    return (
        <button 
            className={`Button rounded-full ${disabled ? 'bg-light-gray' : styleProps.background} ${styleProps.border} ${styleProps.color} px-8 py-4`}
            type='button'
            disabled={disabled}
            onClick={onClick}
        >
            <a href={link}>
                { children }
            </a>
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary',
    link: null,
    disabled: false,
    onClick: () => {},
}

export default Button