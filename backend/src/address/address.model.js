const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  cep: { type: String, require: true },
  logradouro: { type: String, require: true },
  bairro: { type: String, require: true },
  localidade: { type: String, require: true },
  uf: { type: String, require: true },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;