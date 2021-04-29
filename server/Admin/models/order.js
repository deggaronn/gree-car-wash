const mongoose = require("mongoose");

//connecting to the customers database with admin's credentials
const dbURI = "mongodb://localhost/orders";
const conn = mongoose.createConnection(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const order = conn.model("order", new mongoose.Schema({}));

module.exports = order;
