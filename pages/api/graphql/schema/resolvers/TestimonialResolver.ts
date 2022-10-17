module.exports = {

    Testimonial: {},

    Query: {
        fetchTestimonials: (testimonials: any, args: any, { Testimonials }: any) => (
            Testimonials.findAll({ order: [['id', 'ASC']] })
        )
    }
}

export {}