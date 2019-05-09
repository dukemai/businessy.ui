const express = require('express');
const next = require('next');
const sitemapAndRobots = require('./sitemapAndRobots');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 3000;
const ROOT_URL = dev
  ? `http://localhost:${port}`
  : 'https://sitemap-robots.now.sh';

const app = next({ dev });
const handle = app.getRequestHandler();

// Nextjs's server prepared
app.prepare().then(() => {
  const server = express();

  sitemapAndRobots({ server });

  server.get('/company/:domain', (req, res) => {
    return app.render(req, res, '/company', { domain: req.params.domain });
  });

  server.get('/search/:category/:subcategory?', (req, res) => {
    return app.render(req, res, '/search', {
      category: req.params.category,
      subcategory: req.params.subcategory,
    });
  });

  server.get('*', (req, res) => handle(req, res));

  // starting express server
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
  });
});
