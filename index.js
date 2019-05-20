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

module.exports = fastify;
