module.exports = (sequelize: any) => {

    class ServicePackage extends Model {}

    ServicePackage.init({
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
        estimated_cost: {
            type: DataTypes.STRING,
        },
        minimum_cost: {
            type: DataTypes.STRING,
        },
        meeting_frequency: {
            type: DataTypes.STRING,
        },
        subtitle: {
            type: DataTypes.STRING,
        },
        additional_notice: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'ServicePackage',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return ServicePackage

}