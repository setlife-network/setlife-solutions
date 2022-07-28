const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class PackagedService extends Model {}

    PackagedService.init({
        service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'services',
                key: 'id'
            }
        },
        service_package_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'service_packages',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        modelName: 'packaged_services',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return PackagedService

}

export {}