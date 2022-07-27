module.exports = {

    ServicePackage: {
    },

    Query: {
        fetchServicePackages: (service_package: any, args: any, { ServicePackage }: any) => (
            ServicePackage.findAll()
        )
    },
  
}