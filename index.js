const express = require("express");

const server = express();

const postRouter = require("./routers/posts/posts-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send({ message: "Velcome my friends." });
});

server.use("/api/posts", postRouter);

const port = 8000;
server.listen(port, () => {
  console.log("\n*** Server Running on http://localhost:8000 ***\n");
});
