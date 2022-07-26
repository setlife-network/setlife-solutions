module.exports = {

    Project: {
    },

    Query: {
        fetchProjects: (project: any, args: any, db: any) => (
            db.models.Project.findAll()
        )
    },
  
}