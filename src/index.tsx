import fastify from 'fastify';
import { renderPlugin } from './plugins/render';
import { HelloWorld } from './views/HelloWorld';

const port = process.env['PORT'] || 8080;

const app = fastify();

void app.register(renderPlugin);

app.get('/hello/world', (_req, res) => {
  void res.status(200).render(<HelloWorld />);
});

app.listen(port, '0.0.0.0', (err, address) => {
  if (err) throw err;
  app.log.info(`Server starts on: ${address}`);
});
