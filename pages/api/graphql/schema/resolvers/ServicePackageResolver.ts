module.exports = {

    ServicePackage: {
    },

    Query: {
        fetchServicePackages: (servicePackage: any, args: any, { ServicePackage }: any) => (
            ServicePackage.findAll()
        )
    },
  
}