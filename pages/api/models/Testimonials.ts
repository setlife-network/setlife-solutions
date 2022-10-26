const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Testimonials extends Model {}

    Testimonials.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        person_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        testimony: {
            type: DataTypes.STRING,
            allowNull: false
        },
        person_image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'testimonials',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Testimonials

}

export {}