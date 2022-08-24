import React from 'react';
import Headline from './Headline';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

const ProjectImpact = ({
}) => {

    const testProjectImpactTile = ['test', 'test2', 'test3', 'test4']

    const renderProjectImpact = () => {
        return testProjectImpactTile.map((projectImpactTile, idx) => {
            return (
                <div className='grid grid-cols-1 gap-1 rounded-2xl px-6 py-6 bg-solid-white'>
                    <div className=''>
                        <div className='rounded-full bg-primary h-24 w-24 m-auto' />
                    </div>
                    <div className=''>
                        <Subtitle variant='xs' alignment='text-center'>
                            pr
                        </Subtitle>
                    </div>
                    <div className=''>
                        <Paragraph alignment='text-center'>
                            test2
                        </Paragraph>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='ProjectImpact'>
            <div className='mb-12'>
                <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                    Impact
                </Headline>
            </div>
            <div className='grid grid-rows-1 gap-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-44 gap-y-10'>
                    {renderProjectImpact()}
                </div>
            </div>
        </div>
    )
}

export default ProjectImpact