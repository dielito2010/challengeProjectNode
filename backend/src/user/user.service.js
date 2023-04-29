const User = require("./user.model");

const ObjectId = require("mongoose").Types.ObjectId;

const allUsers = () => {
  return User.find()
    .select("firstName lastName email cep numero")
    .sort({ _id: -1 });
};

const userById = (id) => {
  const objectID = new ObjectId(id);
  return User.findById(objectID).populate("categoria");
};

const createUser = (user) => {
  return User.create(user);
};

const updateUser = (id, user) => {
  const objectID = new ObjectId(id);
  return User.findByIdAndUpdate(objectID, user);
};

const deleteUser = (id) => {
  const objectID = new ObjectId(id);
  return User.findByIdAndDelete(objectID);
};

module.exports = {
    allUsers,
    userById,
    createUser,
    updateUser,
    deleteUser,
};