const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./customer.controller");

const app = express();

app.use(bodyParser.json());

const db = require("./db");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.status(200).send("You are becoming a miliniare");
});

//create a new customer
app.post("/customer/new", (req, res) => {
  controller.createCustomer(req, res);
});

app.get("/customers", (req, res) => {
  controller.findAllCustomer(req, res);
});

app.get("/customer/:email", (req, res) => {
  controller.findCustomerByEmail(req, res);
});

app.put("/customer/update", (req, res) => {
  controller.updateCustomer(req, res);
});

app.delete("/customer/delete/:email", (req, res) => {
  controller.deleteCustomer(req, res);
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
