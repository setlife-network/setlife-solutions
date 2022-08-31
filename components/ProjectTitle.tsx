import React from 'react'
import Headline from './Headline'

interface ProjectTitleProps {
    title: string
}

const ProjectTitle = ({
    title
}: ProjectTitleProps) => {
    return (
        <div className='ProjectTitle'>
            <Headline variant='alternative' color='primary'>
                { title }
            </Headline>
        </div>
    )
}

export default ProjectTitle