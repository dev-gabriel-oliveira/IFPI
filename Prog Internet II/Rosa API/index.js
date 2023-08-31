const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Array para armazenar os produtos
const products = [];

// Middleware para validar os dados do produto
function validateProduct(req, res, next) {
  const { name, status, destination, profitability, minTerm, adminFee, maturity, liquidity } = req.body;

  if (!name || !status || !destination || profitability < 1 || profitability > 20 || minTerm < 0 || minTerm > 48 || adminFee < 0 || adminFee > 100 || !maturity || liquidity === undefined) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  next();
}

// Rota para listar todos os produtos
app.get('/products', (req, res) => {
  res.json(products);
});

// Rota para obter um produto pelo ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(product => product.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  res.json(product);
});

// Rota para criar um novo produto
app.post('/products', validateProduct, (req, res) => {
  const id = products.length + 1;
  const newProduct = { id, ...req.body };
  products.push(newProduct);

  res.status(201).json(newProduct);
});

// Rota para atualizar um produto
app.put('/products/:id', validateProduct, (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  products[productIndex] = { id, ...req.body };

  res.json(products[productIndex]);
});

// Rota para deletar um produto
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  res.json(deletedProduct);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
