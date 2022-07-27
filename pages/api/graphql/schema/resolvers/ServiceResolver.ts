module.exports = {

    Service: {
    },

    Query: {
        fetchServices: (service : any, args: any, { Service }: any) => (
            Service.findAll()
        )
    },

} 