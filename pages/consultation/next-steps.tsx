import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Section from '../../components/Section'
import Headline from '../../components/Headline'
import Button from '../../components/Button'

const NextStepsPage: NextPage = () => {
    const router = useRouter()

    return (
        <div className='NextStepsPage bg-gray-100 min-h-screen py-12'>
            <div className='container mx-auto px-4'>
                <Section>
                    <Headline variant='h1' className='text-4xl font-bold text-center mb-12'>
                        Next Steps for Your Project
                    </Headline>
                </Section>
                <Section>
                    <h2 className="text-3xl font-bold mb-6 text-center">Project Start Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">1. Human Consultation</h3>
                            <p className="mb-4">Wait for human engagement and negotiate a series of paid consultations.</p>
                            <p className="font-bold text-lg">Cost: $500 - $3,000</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-green-600">2. AI-Driven Tool</h3>
                            <p className="mb-4">Start your project immediately with our AI-driven tool.</p>
                            <p className="font-bold text-lg">Cost: $20 upfront</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <h2 className="text-3xl font-bold mb-6 text-center">Sample Projects</h2>
                    <p className="text-center mb-4">Check out our sample projects on GitHub:</p>
                    <div className="text-center">
                        <Link href="https://github.com/setlife-network/sample-projects" target="_blank" rel="noopener noreferrer">
                            <a className="text-blue-500 hover:underline text-lg font-semibold">SetLife Network Sample Projects</a>
                        </Link>
                    </div>
                </Section>
                <Section>
                    <h2 className="text-3xl font-bold mb-6 text-center">Ready to Start?</h2>
                    <div className="text-center">
                        <Button 
                            variant='primary' 
                            onClick={() => router.push('/ai-tool')}
                            className="px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-300"
                        >
                            Proceed with AI-Driven Tool
                        </Button>
                    </div>
                </Section>
            </div>
        </div>
    )
}

export default NextStepsPage