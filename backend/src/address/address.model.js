const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  cep: { type: String, require: true },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;