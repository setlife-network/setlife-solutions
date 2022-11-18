module.exports = {
    Testimonial: {
        project: (parent: any, args: any, { Project }: any) => Project.findByPk(parent.project_id),
    },

    Query: {
        fetchTestimonials: (parent: any, args: any, { Testimonials }: any) => {
            return Testimonials.findAll({ order: [['id', 'ASC']] });
        },
    },
};

export {};
