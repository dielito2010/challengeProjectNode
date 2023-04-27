const Address = require("./address.model");
const ObjectId = require("mongoose").Types.ObjectId;

const allAddress = () => {
  return Address.find().sort({_id:-1});
};

const addressId = (id) => {
  const objectID = new ObjectId(id);
  return Address.findById(objectID);
};

const createAddress = (address) => {
  return Address.create(address);
}

const updateAddress = (id, address) => {
  return Address.findByIdAndUpdate(id, address);
}

const deleteAddress = (id) => {
  return Address.findByIdAndDelete(id);
}

module.exports = {
    allAddress,
    addressId,
    createAddress,
    updateAddress,
    deleteAddress,
};
