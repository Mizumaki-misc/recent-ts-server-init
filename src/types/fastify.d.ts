/// <reference types="fastify" />
import { ReactElement } from 'react';

declare module 'fastify' {
  type RenderOption = {
    status: number;
  };
  interface FastifyReply {
    render: (component: ReactElement, options?: RenderOption) => FastifyReply;
  }
}
