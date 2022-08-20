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
        },
        background_banner_image_url: {
            type: DataTypes.STRING
        },
        tile_image_url: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'services',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Service

}

export {}