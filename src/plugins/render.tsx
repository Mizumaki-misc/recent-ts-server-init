import type { FastifyPluginCallback, FastifyReply, FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { renderToStaticMarkup } from 'react-dom/server';
import { HTMLShell } from '~/views/templates/normal';

const decorateReplyFunc = <T extends keyof FastifyReply>(
  property: T,
  func: (
    this: FastifyReply,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: Parameters<FastifyReply[T] extends (...args: any) => any ? FastifyReply[T] : never>
  ) => // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReturnType<FastifyReply[T] extends (...args: any) => any ? FastifyReply[T] : never>,
  fastify: FastifyInstance
) => fastify.decorateReply(property, func);

const renderPluginCallback: FastifyPluginCallback = (fastify, _opts, done) => {
  decorateReplyFunc(
    'render',
    function (this, component, options) {
      const dom = renderToStaticMarkup(<HTMLShell title='hello'>{component}</HTMLShell>);
      const status = options?.status ?? 200;
      void this.header('Content-Type', 'text/html; charset=utf8');
      void this.status(status).send(`<!DOCTYPE html>${dom}`);
      return this;
    },
    fastify
  );
  done();
};

export const renderPlugin = fp(renderPluginCallback);
