/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        API_V1_URL: process.env.API_V1_URL,
        POSTGRES_DB_HOST: process.env.POSTGRES_DB_HOST,
        POSTGRES_DB_USERNAME: process.env.POSTGRES_DB_USERNAME,
        POSTGRES_DB_PASSWORD: process.env.POSTGRES_DB_PASSWORD,
        POSTGRES_DB_NAME: process.env.POSTGRES_DB_NAME,
        POSTGRES_DB_PORT: process.env.POSTGRES_DB_PORT,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        DISCORD_WEBHOOK: process.env.DISCORD_WEBHOOK,
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    }
}

module.exports = nextConfig
