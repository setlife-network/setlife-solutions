const { Sequelize } = require('sequelize')

const { POSTGRES } = require('../../../config/credentials')

const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} = POSTGRES

export const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres',
        port: DB_PORT,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
);

export const db = {
    sequelize,
    models: {
        PackagedService: require('./PackagedService')(sequelize),
        Project: require('./Project')(sequelize),
        ProjectDetail: require('./ProjectDetail')(sequelize),
        ProvidedService: require('./ProvidedService')(sequelize),
        Service: require('./Service')(sequelize),
        ServiceDetail: require('./ServiceDetail')(sequelize),
        ServicePackage: require('./ServicePackage')(sequelize),
    }
};

sequelize
    .authenticate()
    .then(async () => {
        await db.sequelize.sync({ alter: true })
    })
    .catch(function (err: Error) {
        console.log('Unable to connect to the database:', err);
    });

const associations = ({
    PackagedService,
    Project,
    ProjectDetail,
    ProvidedService,
    Service,
    ServiceDetail,
    ServicePackage,
}: any) => {
    PackagedService.belongsTo(Service, { foreignKey: 'service_id' })
    PackagedService.belongsTo(ServicePackage, { foreignKey: 'service_package_id' })
    Project.hasMany(ProjectDetail, { foreignKey: 'project_id' })
    ProvidedService.belongsTo(Service, { foreignKey: 'service_id' })
    ProvidedService.belongsTo(Project, { foreignKey: 'project_id' })
    Service.hasMany(ServiceDetail, { foreignKey: 'service_id' })
}

associations(db.models)

export default db
