import { server } from './server.js';

const port = 8080;

server.listen(port, () => console.log(`Waiting for connections on port ${port}`));