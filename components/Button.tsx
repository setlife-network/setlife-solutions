import React from 'react'

interface ButtonProps {
    children: any,
    className?: string,
    link?: string | null,
    variant?: string,
    disabled?: boolean
}

const variants = {
    'primary': {
        'background': 'bg-light-gray',
        'border': 'border-2 border-light-gray',
        'color': 'text-primary'
    },
    'secondary': {
        'background': 'bg-solid-white',
        'border': 'border-2 border-primary',
        'color': 'text-primary'
    },
    'tertiary': {
        'background': 'bg-primary',
        'border': '',
        'color': 'text-solid-white'
    },
    'dark': {
        'background': 'bg-solid-black',
        'color': 'text-solid-white' 
    }
}

const Button = ({
    children,
    link,
    variant,
    disabled,
    className
}: ButtonProps) => {

    const styleProps = variants[variant || 'primary'];

    const buttonContent = (
        <>
            {children}
        </>
    );

    if (link) {
        return (
            <a 
                href={link}
                className={`
                    Button
                    rounded-full
                    py-4
                    ${disabled ? 'bg-light-gray' : styleProps.background}
                    ${styleProps.border}
                    ${styleProps.color}
                    ${className}
                `}
            >
                {buttonContent}
            </a>
        )
    }

    return (
        <button 
            className={`
                Button
                rounded-full
                py-4
                ${disabled ? 'bg-light-gray' : styleProps.background}
                ${styleProps.border}
                ${styleProps.color}
                ${className}
            `}
            type='button'
            disabled={disabled}
        >
            {buttonContent}
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary',
    link: null,
    disabled: false,
    className: ''
}

export default Button

