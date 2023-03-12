const prefix = require("../../utils/prefix");
const HomeHandler = require("./handler");
const routes = require("./routes");

module.exports = {
    name: "home",
    version: "1.0.0",
    register: async (server, {
        service
    }) => {
        const homeHandler = new HomeHandler({ service });
        server.route(prefix('/api', routes(homeHandler)));
    },
};