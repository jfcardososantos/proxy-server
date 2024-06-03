const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = 3001; // Pode mudar para qualquer porta que desejar

// Habilitar CORS para todas as rotas
app.use(cors());

// Configurar o proxy
app.use('/mercadopago', createProxyMiddleware({
  target: ' https://api.mercadopago.com', // Substitua pelo endereço final
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    '^/mercadopago': '', // Remove o prefixo '/api' antes de enviar para o endereço final
  },
}));

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
