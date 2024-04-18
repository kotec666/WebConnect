import * as fastify from "fastify";
import {FastifyRequest, FastifyReply} from "fastify";
const fastifyConfig = () => {
  //@ts-ignore
  const instance = fastify() as FastifyInstance

  instance.addHook('onRequest', (request, reply, done) => {
    reply.setHeader = function (key, value) {
      return this.raw.setHeader(key, value)
    }
    reply.end = function () {
      this.raw.end()
    }
    request.res = reply
    done()
  })

  return instance
}

export default fastifyConfig