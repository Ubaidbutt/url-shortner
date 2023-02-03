import fastify from 'fastify';

(async () => {
    const server = fastify();
    server.get('/ping', async (request, reply) => {
        return { success: true }
    });

    await server.listen({ port: 8080 });
    console.log('Server is up and running at port 8080');
})();
