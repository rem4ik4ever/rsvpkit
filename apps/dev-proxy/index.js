const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  console.log('Cookies:', req.cookies);
  console.log('Headers:', req.headers);
  next();
});

// Proxy configuration for platform.app.dev
app.use('/api/graphql', createProxyMiddleware({
  target: 'http://localhost:3300/api/graphql', // Backend server for platform.app.dev
  //changeOrigin: true,
  //pathRewrite: {
  //  '^/api/graphql': '', // Remove /platform from the path
  //},
}));


// Proxy configuration for app.dev
app.use('/', createProxyMiddleware({
  target: 'http://localhost:3000', // Frontend server for app.dev
  //changeOrigin: true,
}));

// Start the proxy server
app.listen(4000, () => {
  console.log('Proxy server is running on http://localhost:4000');
});
