const mongoose = require("mongoose");
const Simpson = require("../models/Simpson");

const validaID = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id Inválido" });
    return;
  }

  try {
    const simpson = await Simpson.findById(id);
    if(!simpson){
        return res.status(404).send({msgMiddleware: "Personagem não encontrado."})
    }
    res.simpson = simpson
  } catch (err) {
    return res.status(500).send({error: err})
  }

  next();
};

module.exports = { validaID };
