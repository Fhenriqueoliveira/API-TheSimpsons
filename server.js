require("dotenv").config();
const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes");
const cors = require("cors");

connectToDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.options("*",cors());
app.use(routes);

app.listen(port, () =>
  console.info(`Servidor rodando em Springfield..... quero dizer http://localhost:${port}`)
);
