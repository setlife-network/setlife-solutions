import type { NextPage } from 'next'
import Headline from '../components/Headline'
import Section from '../components/Section'

const AIToolPage: NextPage = () => {
  return (
    <div className='AIToolPage'>
      <Section>
        <Headline variant='h1'>
          AI-Driven Project Start
        </Headline>
        <p>This is where the AI-driven tool for starting projects will be implemented.</p>
      </Section>
    </div>
  )
}

export default AIToolPage