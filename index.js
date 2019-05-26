require('dotenv').config();
const fastify = require('fastify')({
    logger: true
});

fastify.listen(process.env.API_PORT || 8080, '0.0.0.0', (err, address) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    } else {
        fastify.log.info(`server listening on ${address}`);
    }
});

process.on('SIGINT', async () => {
    console.log('stopping fastify server');
    await fastify.close();
    console.log('fastify server stopped');
    process.exit(0);
});
module.exports = fastify;
