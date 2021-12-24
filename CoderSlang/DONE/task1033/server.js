import express from 'express';

const server = express();

server.get('/hello', (req, res) => {
  res.send('Hello, Coderslang!');
})

server.get('/about', (req, res) => {
  res.send('Lorem ipsum dolor sit amet');
})

export { server };