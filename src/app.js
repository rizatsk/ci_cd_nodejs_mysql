const Hapi = require("@hapi/hapi");

const home = require('./api/home');
const HomeService = require('./services/HomeService')

const app = async () => {
    const homeService = new HomeService();

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    await server.register([
        {
            plugin: home,
            options: {
                service: homeService
            }
        }
    ])

    return server;
}

module.exports = app;