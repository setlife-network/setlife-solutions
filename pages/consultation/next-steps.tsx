import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Section from '../../components/Section'
import Headline from '../../components/Headline'
import Button from '../../components/Button'

const NextStepsPage: NextPage = () => {
    const router = useRouter()

    return (
        <div className='NextStepsPage'>
            <Section>
                <Headline variant='h1'>
                    Next Steps for Your Project
                </Headline>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold mb-4">Project Start Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">1. Human Consultation</h3>
                        <p>Wait for human engagement and negotiate a series of paid consultations.</p>
                        <p className="font-bold mt-2">Cost: $500 - $3,000</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">2. AI-Driven Tool</h3>
                        <p>Start your project immediately with our AI-driven tool.</p>
                        <p className="font-bold mt-2">Cost: $20 upfront</p>
                    </div>
                </div>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold mb-4">Sample Projects</h2>
                <p>Check out our sample projects on GitHub:</p>
                <Link href="https://github.com/setlife-network/sample-projects" target="_blank" rel="noopener noreferrer">
                    <a className="text-blue-500 hover:underline">SetLife Network Sample Projects</a>
                </Link>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
                <Button variant='primary' onClick={() => router.push('/ai-tool')}>
                    Proceed with AI-Driven Tool
                </Button>
            </Section>
        </div>
    )
}

export default NextStepsPage