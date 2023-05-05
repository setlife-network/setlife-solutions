import React from 'react';
import { useTranslation } from 'next-i18next';

import Headline from './Headline';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

import ProjectDetailsProps from '../interfaces/ProjectDetailsProps';

import { IMPACT } from '../constants/strings';
import DedicatedDevTile from './DedicatedDevTile';
import ProductionGradeTile from './ProductionGradeTile';

interface ProjectImpactProps {
    projectDetails: ProjectDetailsProps[]
}

const ProjectImpact = ({
    projectDetails
}: ProjectImpactProps) => {
    
    const { t } = useTranslation('project')

    const renderProductionGradeTile = () => {
        return projectDetails.map(projectDetail => {
            if (projectDetail.type == 'impact' && projectDetail.sub_type == 'production_grade') {
                return (
                    <ProductionGradeTile description={projectDetail.description} key={projectDetail.id} />
                )
            }
        })
    }

    const renderDedicatedDevTile = () => {
        return projectDetails.map(projectDetail => {
            if (projectDetail.type == 'impact' && projectDetail.sub_type == 'dedicated_development') {
                return (
                    <DedicatedDevTile description={projectDetail.description} key={projectDetail.id} />
                )
            }
        })
    }

    return (
        <div className='ProjectImpact'>
            <div className='mb-12'>
                <Headline variant='h1' color='solid-black' alignment='text-left'>
                    { t(IMPACT) }
                </Headline>
            </div>
            <div className='grid grid-rows-1 gap-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10'>
                    { renderDedicatedDevTile() }
                    { renderProductionGradeTile() }
                </div>
            </div>
        </div>
    )
}

export default ProjectImpact