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
        logging: false
    }
);

export const db = {
    sequelize,
    models: {
        Service: require('./Service')(sequelize),
        ServiceDetail: require('./ServiceDetail')(sequelize)
    }
};

sequelize
    .authenticate()
    .then(async () => {
        await db.sequelize.sync()
    })
    .catch(function (err: Error) {
        console.log('Unable to connect to the database:', err);
    });

const associations = ({
    Service, 
    ServiceDetail 
}: any) => {
    Service.hasMany(ServiceDetail, { foreignKey: 'service_id' })
}

associations(db.models)

module.exports = db;

