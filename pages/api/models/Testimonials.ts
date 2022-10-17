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
        person_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_name: {
            type: DataTypes.TEXT,
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
        company_image_url: {
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