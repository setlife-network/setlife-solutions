module.exports = (sequelize: any) => {

    class ServiceDetail extends Model {}

    ServiceDetail.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Service',
                key: 'id',
            }
        },
        detail: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'ServiceDetail',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return ServiceDetail

}