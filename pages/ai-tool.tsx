import type { NextPage } from 'next'
import { useState } from 'react'
import Headline from '../components/Headline'
import Section from '../components/Section'
import Button from '../components/Button'

const AIToolPage: NextPage = () => {
  const [projectDescription, setProjectDescription] = useState('')
  const [generatedPlan, setGeneratedPlan] = useState('')

  const handleGeneratePlan = () => {
    // This is where you'd integrate with your AI tool
    // For now, we'll just set a placeholder response
    setGeneratedPlan('Your AI-generated project plan will appear here.')
  }

  return (
    <div className='AIToolPage bg-gray-100 min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        <Section>
          <Headline variant='h1' className='text-4xl font-bold text-center mb-12'>
            AI-Driven Project Start
          </Headline>
        </Section>
        <Section className='bg-white shadow-lg rounded-lg p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Describe Your Project</h2>
          <textarea
            className='w-full h-40 p-2 border rounded-md mb-4'
            placeholder='Enter your project description here...'
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <Button 
            variant='primary'
            onClick={handleGeneratePlan}
            className='px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300'
          >
            Generate Project Plan
          </Button>
        </Section>
        {generatedPlan && (
          <Section className='bg-white shadow-lg rounded-lg p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Your AI-Generated Project Plan</h2>
            <div className='bg-gray-100 p-4 rounded-md'>
              <p>{generatedPlan}</p>
            </div>
          </Section>
        )}
      </div>
    </div>
  )
}

export default AIToolPage