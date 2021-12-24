import express from 'express';

const server = express();

server.get('/config', (req, res) => {
  //send the response here
})

export { server };