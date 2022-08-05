import React from 'react';

interface TitleProps {
    children: string,
    tone?: string,
    variant?: string
}

interface StyleProps {
    color: string,
    alignment: string
}

const Title = ({
    children,
    tone,
    variant
}: TitleProps) => {

    const styleProps: StyleProps = { color: '', alignment: '' } 

    if (tone == 'setlife') {
        styleProps.color = 'primary' 
    } else if (tone == 'solid') {
        styleProps.color = 'solid-black'
    } else if (tone == 'white') {
        styleProps.color = 'solid-white'
    }

    if (variant == 'primary') {
        styleProps.alignment = 'text-center'
    } else if (variant == 'secondary') {
        styleProps.alignment = 'text-center sm:text-left'
    }

    return (
        <div className={`Title text-5xl sm:text-6xl font-bold text-${styleProps.color} ${styleProps.alignment}`}>
            { children }
        </div>
    )
}

Title.defaultProps = {
    tone: '',
    variant: ''
}

export default Title