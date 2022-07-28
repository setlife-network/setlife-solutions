const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class ProjectDetail extends Model {}

    ProjectDetail.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'id'
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING
        },
        sub_type: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'project_details',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return ProjectDetail

}

export {}