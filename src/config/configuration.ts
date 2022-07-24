export default () => ({
    port: parseInt(process.env.API_PORT, 10) || 3000,
    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        password: process.env.DB_PASSWORD,
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
    },
    jwt_secret: process.env.JWT_SECRET,
});
