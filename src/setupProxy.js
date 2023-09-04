import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function setupProxy(app) {
  app.use('/Auth', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:5173', 
      changeOrigin: true,
    });
  });
};