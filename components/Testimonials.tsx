import React from 'react'
import { useQuery } from '@apollo/client'
import Pulse from './Pulse'
import Headline from './Headline'
import { GET_TESTIMONIALS } from '../operations/queries/TestimonialsQueries'
import { TESTIMONIALS } from '../constants/strings'
import TestimonialsProps from '../interfaces/TestimonialsProps'
import TestimonialsTile from '../components/TestimonialsTile'

interface getTestimonials {
    fetchTestimonials: TestimonialsProps[]
}

const Testimonials = () => {

    const { error, data, loading } = useQuery<getTestimonials>(
        GET_TESTIMONIALS
    )

    if (error || loading) {
        return (
            <div className='grid grid-rows place-content-center'>
                <Pulse />
            </div>
        )
    }
    const testimonials = [...data!.fetchTestimonials]

    const renderTestimonials = () => {
        return testimonials.map((t, i) => {
        return (
            <div className='flex flex-initial w-full md:w-1/3 px-4' key={`st-${t.id}`}>
                <TestimonialsTile
                    person_name={t.person_name}
                    testimony={t.testimony}
                    person_image_url={`/testimonials/${t.id}`}
                    project={t.project}
                /> 
            </div>
        )
    })
}
        
    return (
        <div className='Testimonials'>        
            <div className='mb-12'>
                <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                    { TESTIMONIALS }
                </Headline>
                </div>
                <div className='flex flex-row flex-wrap justify-center gap-y-8'>
                    {renderTestimonials()}
                </div>
            </div>
        
    )
}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>


export default Testimonials