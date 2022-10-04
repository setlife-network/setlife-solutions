module.exports = {

    Service: {
        serviceDetails: (service: any, args: any, { ServiceDetail }: any) => (
            ServiceDetail.findAll({ where: { service_id: service.id }})
        ),
        projects: (service: any, args: any, { ProvidedService, Project }: any) => (
            Project.findAll({
                raw: true,
                include: {
                    model: ProvidedService,
                    where: {
                        service_id: service.id
                    }
                }
            })
        )
    },

    Query: {
        fetchServices: (service : any, args: any, { Service }: any) => (
            Service.findAll({ order: [['id', 'ASC']] })
        ),
        fetchService: (service: any, args: any, { Service }: any) => (
            Service.findByPk(args.id)
        )
    },

} 

export {}