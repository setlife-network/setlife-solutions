module.exports = {

    Project: {
    },

    Query: {
        fetchProjects: (project: any, args: any, db: any) => (
            db.models.Project.findAll()
        ),
        fetchProject: (project: any, args:any, db: any) => (
            db.models.Project.findByPk(args.id)
        )
    },
  
}