module.exports = {

    Service: {
    },

    Query: {
        fetchServices: (service : any, args: any, db: any) => (
            db.models.Service.findAll()
        )
    },

} 