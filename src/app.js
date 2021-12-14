require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/mongoConfig");

const app = express();

app.use(cors());
app.use(express.json());

db.connect();

const cadastroRoutes = require("./routes/cadastroRoutes");

app.use("/", cadastroRoutes);

module.exports = app