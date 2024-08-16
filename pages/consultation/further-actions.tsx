import React from 'react';
import Link from 'next/link';
import Section from '../../components/Section';
import Headline from '../../components/Headline';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';

const FurtherActionsPage = () => {
    return (
        <Section>
            <Headline variant='h1'>Next Steps for Your Project</Headline>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold'>Option 1: Human Engagement</h2>
                    <p className='mt-2 text-gray-600'>Negotiate a series of paid consultations which could cost between $500 and $3,000.</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold'>Option 2: AI-Driven Tool</h2>
                    <p className='mt-2 text-gray-600'>Start your project with only a $20 upfront payment.</p>
                </div>
            </div>
            <div className='mt-8'>
                <Subtitle variant='h3'>Explore Sample Projects</Subtitle>
                <Link href='https://github.com/setlife-network/sample-projects'>
                    <a target='_blank' className='text-blue-600 hover:underline'>GitHub Repository</a>
                </Link>
            </div>
            <div className='mt-4'>
                <Subtitle variant='h3'>Proceed with the AI-Driven Tool</Subtitle>
                <Link href='/ai-tool'>
                    <a className='button bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700'>Start Now</a>
                </Link>
            </div>
        </Section>
    );
};

export default FurtherActionsPage;