const Sequelize = require("sequelize");

const dbname = "customer";
const dbuser = "root";
const dbpasword = "root";

const sequelize = new Sequelize(dbname, dbuser, dbpasword, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customer.model")(sequelize, Sequelize);

module.exports = db;
