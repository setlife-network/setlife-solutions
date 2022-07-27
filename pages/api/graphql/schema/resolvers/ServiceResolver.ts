module.exports = {

    Service: {
        serviceDetails: (service: any, args:any, { ServiceDetail }: any) => (
            ServiceDetail.findAll({ where: { service_id: service.id }})
        )
    },

    Query: {
        fetchServices: (service : any, args: any, { Service }: any) => (
            Service.findAll()
        )
    },

} 