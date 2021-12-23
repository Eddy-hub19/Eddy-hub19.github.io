import express from "express";
const server = express();

server.get("/", (req, res) => {
  return res.send("Hello, Express.js!");
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
