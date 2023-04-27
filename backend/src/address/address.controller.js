const { objetoValido } = require("../db/dbHelper");

const service = require("./address.service");

const allAddress = async (req, res) => {
  const Address = await service.allAddress();
  res.send(Address);
};

const addressId = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const addressId = await service.addressId(id);
  if (!addressId) {
    return res.status(404).send({ message: "Endereço não encontrado!" });
  }

  res.send(addressId);
};

const createAddress = async (req, res) => {
  const address = req.body;
  if (  !address ||
        !address.cep ||
        !address.logradouro ||
        !address.bairro ||
        !address.localidade ||
        !address.uf
     ) {
    return res.status(400).send({ message: "Dados inválidos, favor verificar!" });
  }

  const newAddress = await service.criar(address);

  res.status(201).send({ message: "Endereço criado com sucesso!" });
};

const updateAddress = async (req, res) => {
  const id = req.params.id
  const address = req.body;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const addressUpdated = await service.updateAddress(id, address);

  res.status(201).send({ message: "Endereço atualizado com sucesso!" });
}

const deleteAddress = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const deleteAddress = await service.deteteAddress(id);
  if (!deleteAddress) {
    return res.send(404).send({ message: "Endereço não encontrado!" });
  }
  res.send({ message: "Endereço excluido com sucesso!" });
};

//exporta os resultados para API
module.exports = {
  allAddress,
  addressId,
  createAddress,
  updateAddress,
  deleteAddress,
};