declare module 'fastify' {
  interface FastifyRequest extends Request {
    user?: number;
  }
}