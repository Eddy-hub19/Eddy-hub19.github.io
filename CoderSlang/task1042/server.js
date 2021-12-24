import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Learning to use middleware!');
})

export { server };