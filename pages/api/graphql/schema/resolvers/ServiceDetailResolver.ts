module.exports = {

    ServiceDetail: {
    },

    Query: {
        fetchServiceDetail: (serviceDetail: any, args: any, { ServiceDetail }: any) => (
            ServiceDetail.findByPk(args.id)
        )
    },
  
}