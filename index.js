require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = process.env;

const app = express();

require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

app.listen(PORT, () => {
    console.log("Servidor funcionando.");
});
