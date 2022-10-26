module.exports = {

    Testimonial: {
        project: (testimonials: any, args: any, { Project }: any) => (
            Project.findAll({ where: { id: testimonials.project_id }})
        )
    },

    Query: {
        fetchTestimonials: (testimonials: any, args: any, { Testimonials }: any) => (
            Testimonials.findAll({ order: [['id', 'ASC']] })
        )
    }
}

export {}