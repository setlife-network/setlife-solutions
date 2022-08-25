module.exports = {

    ServicePackage: {
        services: (servicePackage: any, args: any, { PackagedService, Service }: any) => (
            Service.findAll({
                raw: true,
                include: {
                    model: PackagedService,
                    where: {
                        service_package_id: servicePackage.id
                    }
                }
            })
        )
    },

    Query: {
        fetchServicePackages: (servicePackage: any, args: any, { ServicePackage }: any) => (
            ServicePackage.findAll()
        )
    },
  
}

export {}