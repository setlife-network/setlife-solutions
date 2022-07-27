module.exports = {

    ServiceDetail: {
    },

    Query: {
        fetchServiceDetail: (service_detail: any, args: any, { ServiceDetail }: any) => (
            ServiceDetail.findByPk(args.id)
        )
    },
  
}