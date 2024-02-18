const db = require("./db");
const Customer = db.customers;

//ceate the  customer
function createCustomer(req, res) {
  if (!req.body.name) {
    return res.status(400).send({ message: "Bad Data" });
  }
  const customerObject = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  Customer.create(customerObject)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

//fetch all customers
function findAllCustomer(req, res) {
  Customer.findAll()
    .then((data) => {
      res.status(200).send({ allCustomers: data });
    })
    .catch((e) => res.status(400).send(e));
}

//retrive a single customer by id
function findCustomerByEmail(req, res) {
  Customer.findByPk(req.params.email)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
}

//update single customer by
function updateCustomer(req, res) {
  const newData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  Customer.update(newData, { where: { email: req.body.email } })
    .then((data) => {
      res.status(200).send({
        success: true,
        message: "Updated data successfully for" + req.body.email,
      });
    })
    .catch((e) => {
      res.status(200).send(e);
    });
}

function deleteCustomer(req, res) {
  Customer.destroy({ where: { email: req.params.email } })
    .then(() => {
      res.status(200).send({
        success: true,
        message: "Deleted data successfully for" + req.params.email,
      });
    })
    .catch((e) => {
      res.status(200).send(e);
    });
}

module.exports = {
  createCustomer,
  findAllCustomer,
  findCustomerByEmail,
  updateCustomer,
  deleteCustomer,
};
