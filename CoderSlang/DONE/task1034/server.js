import express from 'express';

const server = express();

server.get('/hello', (req, res) => {
  res.send('Hello, Coderslang!');
})

export { server };