/** @type {import('next').NextConfig} */

require('dotenv').config()

const nextConfig = {
    reactStrictMode: true,
    env: {
        POSTGRES_DB_HOST: process.env.POSTGRES_DB_HOST,
        POSTGRES_DB_USERNAME: process.env.POSTGRES_DB_USERNAME,
        POSTGRES_DB_PASSWORD: process.env.POSTGRES_DB_PASSWORD,
        POSTGRES_DB_NAME: process.env.POSTGRES_DB_NAME,
        POSTGRES_DB_PORT: process.env.POSTGRES_DB_PORT,
        API_V1_URL: process.env.API_V1_URL,
    }
}

module.exports = nextConfig
