const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cartasRouter = require("./router/cartasRouter.js");

const PORT = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", cartasRouter);
app.listen(PORT, () => {
  console.log("servidor online");
});
