const app = require('./app');

require('dotenv').config()

const init = async () => {
    const server = await app();
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();