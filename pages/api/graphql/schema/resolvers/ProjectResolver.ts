module.exports = {

    Project: {
        projectDetails: (project: any, args: any, { ProjectDetail }: any) => (
            ProjectDetail.findAll({ where: { project_id: project.id }})
        )
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