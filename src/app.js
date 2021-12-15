const express = require("express");
const cors = require("cors");

require("dotenv-safe").config();
const db = require("./database/mongoConfig");
const cadastroRoutes = require("./routes/cadastroRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", cadastroRoutes);

db.connect()

module.exports = app