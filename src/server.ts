import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: "Olá, tudo bem com vocês?"
  })
})

app.post('/', (request, response) => {
  return response.json({
    message: "Olá, tudo bem com vocês"
  })
})

app.listen(3333, () => console.log("Servidor rodando normalmente na porta 3333"))