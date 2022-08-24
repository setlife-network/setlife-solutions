import React from 'react';

import Headline from './Headline';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

import ProjectDetailsProps from '../interfaces/ProjectDetailsProps';

import { IMPACT } from '../constants/strings';

interface ProjectImpactProps {
    projectDetails: ProjectDetailsProps[]
}

const ProjectImpact = ({
    projectDetails
}: ProjectImpactProps) => {

    const renderProjectImpactTile = () => {
        return projectDetails.map((projectDetail, idx) => {
            if (projectDetail.type == 'impact') {
                return (
                    <div className='grid grid-cols-1 gap-4 rounded-2xl px-6 py-6 bg-solid-white'>
                        <div className='mt-10'>
                            <div className='rounded-full bg-primary h-24 w-24 m-auto' />    
                        </div>
                        <div className=''>
                            <Subtitle variant='xs' alignment='text-center'>
                                { projectDetail.sub_type }
                            </Subtitle>
                        </div>
                        <div className='mb-10'>
                            <Paragraph alignment='text-center'>
                                { projectDetail.description }
                            </Paragraph>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <div className='ProjectImpact'>
            <div className='mb-12'>
                <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                    { IMPACT }
                </Headline>
            </div>
            <div className='grid grid-rows-1 gap-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-44 gap-y-10'>
                    {renderProjectImpactTile()}
                </div>
            </div>
        </div>
    )
}

export default ProjectImpact