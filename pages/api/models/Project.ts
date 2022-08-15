const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Project extends Model {}

    Project.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_resource: {
            type: DataTypes.STRING,
        },
        other_resource: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: 'projects',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Project

}

export {}