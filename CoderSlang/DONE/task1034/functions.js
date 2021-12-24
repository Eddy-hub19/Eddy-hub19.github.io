export const startServer = (server, port) => {
    server.listen(port, () => console.log(`Waiting for connections on port ${port}`));

}