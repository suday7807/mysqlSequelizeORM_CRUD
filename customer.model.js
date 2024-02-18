module.exports = (sequelize, Sequelize) => {
  const customer = sequelize.define("customer", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  });
  return customer;
};
