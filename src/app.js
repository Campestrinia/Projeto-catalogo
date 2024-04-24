const express = require("express");
const bodyParser = require("body-parser");



const PORT = 3001;

const app = express();

app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send(`<h1>Hello Word!</h1>`);
});

app.use(bodyParser.json());
app.use("/api", produtoRouter);


app.listen(PORT, () => {
  console.log("servidor online");
});
