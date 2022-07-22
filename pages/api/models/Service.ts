const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Service extends Model {}

    Service.init({
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
        }
    },
    {
        sequelize,
        modelName: 'Service',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Service

}

export {}