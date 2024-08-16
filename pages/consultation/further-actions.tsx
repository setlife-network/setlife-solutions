import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FurtherActionsPage = () => {
    return (
        <div className='FurtherActionsPage'>
            <h1>Next Steps for Your Project</h1>
            <div className='options'>
                <div className='option'>
                    <Image src='/path/to/graphic1.png' alt='Human Engagement' width={500} height={300} />
                    <h2>Option 1: Human Engagement</h2>
                    <p>Negotiate a series of paid consultations which could cost between $500 and $3,000.</p>
                </div>
                <div className='option'>
                    <Image src='/path/to/graphic2.png' alt='AI-Driven Tool' width={500} height={300} />
                    <h2>Option 2: AI-Driven Tool</h2>
                    <p>Start your project with only a $20 upfront payment.</p>
                </div>
            </div>
            <div className='github-link'>
                <h3>Explore Sample Projects</h3>
                <Link href='https://github.com/setlife-network/sample-projects'>
                    <a target='_blank'>GitHub Repository</a>
                </Link>
            </div>
            <div className='call-to-action'>
                <h3>Proceed with the AI-Driven Tool</h3>
                <Link href='/ai-tool'>
                    <a className='button'>Start Now</a>
                </Link>
            </div>
        </div>
    );
};

export default FurtherActionsPage;