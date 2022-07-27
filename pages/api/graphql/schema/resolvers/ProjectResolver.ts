module.exports = {

    Project: {
    },

    Query: {
        fetchProjects: (project: any, args: any, { Project }: any) => (
            Project.findAll()
        ),
        fetchProject: (project: any, args: any, { Project }: any) => (
            Project.findByPk(args.id)
        )
    },
  
}