require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/api");

const { PORT } = process.env;

const app = express();

require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log("Servidor funcionando.");
});
