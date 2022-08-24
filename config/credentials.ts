require('dotenv').config()

module.exports = {
    POSTGRES: {
        DB_HOST: process.env.POSTGRES_DB_HOST,
        DB_USERNAME: process.env.POSTGRES_DB_USERNAME,
        DB_PASSWORD: process.env.POSTGRES_DB_PASSWORD,
        DB_NAME: process.env.POSTGRES_DB_NAME,
        DB_PORT: process.env.POSTGRES_DB_PORT
    }
};

export {}