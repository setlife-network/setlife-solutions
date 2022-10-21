const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize: any) => {

    class Consultation extends Model {}

    Consultation.init({
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        max_budget: {
            type: DataTypes.STRING,
            allowNull: false
        },
        min_budget: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_type: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        project_goals: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        constraints: {
            type: DataTypes.TEXT
        },
        phone_number: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: 'consultations',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Consultation

}

export {}