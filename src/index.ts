import fastify from 'fastify';
import config from './config/config';

const { PORT } = config;

const app = fastify({
  logger: true
});

app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await app.listen({ port: PORT });
    app.log.info(`Server listening on port ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
