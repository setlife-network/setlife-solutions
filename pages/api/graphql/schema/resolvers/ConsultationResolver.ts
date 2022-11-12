
module.exports = {

    Consultation: {},

    Query: {},

    Mutation: {
        createConsultation: (root: any, { createFields }: any, { Consultation }: any) => {
            return Consultation.create({
                ...createFields
            })
        }
    }
  
}

export {}