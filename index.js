// index.js

'use strict';

const Server = require('./server');

exports.init = async () => {
    const server = await Server.deployment();
    await server.initialize();
    return server;
};


async function start() {
    let server = await Server.deployment();
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();