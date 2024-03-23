const Sequelize = require("sequelize");

const { DB_NAME, DB_USER , DB_PASSWORD, DB_HOST } = process.env;

const FilmModel = require("./models/films");
const UserModel = require("./models/users");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false})
    .then(()=> {
        console.log("Tablas sincronizadas.");
    });

module.exports = {
    Film,
    User
}