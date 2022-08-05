import React from 'react';

interface TextProps {
    children: string,
    tone?: string,
    variant?: string
}

interface StyleProps {
    color: string,
    alignment: string
}

const Text = ({
    children,
    tone = '',
    variant = ''
}: TextProps) => {

    const styleProps: StyleProps = { color: '', alignment: '' } 

    if (tone == 'setlife') {
        styleProps.color = 'primary' 
    } else if (tone == 'solid') {
        styleProps.color = 'solid-black'
    } else if (tone == 'white') {
        styleProps.color = 'solid-white'
    }

    if (variant == 'primary') {
        styleProps.alignment = 'center'
    } else if (variant == 'secondary') {
        styleProps.alignment = 'text-left'
    }

    return (
        <div className={`Text text-base font-normal text-${styleProps.color} ${styleProps.alignment}`}>
            { children }
        </div>
    )
}

Text.defaultProps = {
    tone: '',
    variant: ''
}

export default Text