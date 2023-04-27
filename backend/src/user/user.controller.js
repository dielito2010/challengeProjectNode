const { objetoValido } = require("../db/dbHelper");
const service = require("./user.service");
const serviceAddress = require("../address/address.service");

const allUsers = async (req, res) => {
  const users = await service.allUsers();
  res.send(users);
};

const userById = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const user = await service.allUsers(id);
  if (!user) {
    return res.status(404).send({ message: "User não encontrado!" });
  }

  res.send(user);
};

const createUser = async (req, res) => {
  const user = req.body;
  if (
    !user ||
    !user.firstName ||
    !user.lastName ||
    !user.email ||
    !user.address
  ) {
    return res.status(400).send({
      message: "Dados inválidos ou dados obrigatórios não informados!",
    });
  }

  const address = req.body;
  const addressId = address.address;
  const getId = await serviceAddress.addressId(addressId);
  if (!getId) {
    return res.status(404).send({ message: "Endereço não encontrado!" });
  }

  const newUser = await service.createUser(user);

  res.status(201).send({ message: "User criado com sucesso!" });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const user = req.body;
  if (
    !user ||
    !user.firstName ||
    !user.lastName ||
    !user.email ||
    !user.address
  ) {
    return res.status(400).send({
      message: "Dados inválidos ou dados obrigatórios não informados!",
    });
  }

  const address = req.body;
  const addressId = address.address;
  const getId = await serviceAddress.addressId(addressId);
  if (!getId) {
    return res.status(404).send({ message: "Endereço não encontrado!" });
  }

  const updateUser = await service.atulizar(id, user);
  if (!updateUser) {
    return res.send(404).send({ message: "User não encontrado!" });
  }
  res.send({ message: "User atualizado com sucesso!" });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const deleteUser = await service.excluirCard(id);
  if (!deleteUser) {
    return res.send(404).send({ message: "User não encontrado!" });
  }
  res.send({ message: "User excluido com sucesso!" });
};

module.exports = {
  allUsers,
  userById,
  createUser,
  updateUser,
  deleteUser,
};
