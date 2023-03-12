const routes = (handler) => [
    {
        method: 'GET',
        path: '',
        handler: handler.getDataHomeHandler
    },
];

module.exports = routes;