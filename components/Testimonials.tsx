import React from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'next-i18next';

import Pulse from './Pulse';
import Headline from './Headline';
import { GET_TESTIMONIALS } from '../operations/queries/TestimonialsQueries';
import { TESTIMONIALS } from '../constants/strings';
import TestimonialsProps from '../interfaces/TestimonialsProps';
import TestimonialsTile from '../components/TestimonialsTile';

interface getTestimonials {
    fetchTestimonials: TestimonialsProps[];
}

const Testimonials = () => {

    const { t } = useTranslation('home')

    const { error, data, loading } = useQuery<getTestimonials>(GET_TESTIMONIALS);

    if (error || loading) {
        return (
            <div className='grid grid-rows place-content-center'>
                <Pulse />
            </div>
        );
    }
    const testimonials = [...data!.fetchTestimonials];

    const renderTestimonials = () => {
        return testimonials.map((t, i) => {
            return (
                <div className='mx-auto snap-center h-auto' key={`st-${t.id}`}>
                    <TestimonialsTile
                        person_name={t.person_name}
                        testimony={t.testimony}
                        person_image_url={t.person_image_url}
                        project={t.project}
                    />
                </div>
            );
        });
    };

    return (
        <div className='Testimonials'>
            <div className='mb-12'>
                <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                    {t(TESTIMONIALS)}
                </Headline>
            </div>
            <div className='flex flex-nowrap gap-8 snap-x overflow-scroll justify-items-center'>
                {renderTestimonials()}
            </div>
        </div>
    );
};

export default Testimonials;
