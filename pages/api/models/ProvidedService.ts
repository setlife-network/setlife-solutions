const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class ProvidedService extends Model {}

    ProvidedService.init({
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'Project',
                key: 'id'
            }
        },
        service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'Service',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        modelName: 'provided_services',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return ProvidedService

}

export {}