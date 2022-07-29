module.exports = {

    ProjectDetail: {
    },

    Query: {
        fetchProjectDetail: (projectDetail: any, args: any, { ProjectDetail }: any) => (
            ProjectDetail.findByPk(args.id)
        ),
    },
  
}