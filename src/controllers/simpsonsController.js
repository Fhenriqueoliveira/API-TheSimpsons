const Simpson= require("../models/Simpson");

const getAll = async (req, res) => {
  try {
    const simpsons = await Simpson.find(); // Promisse
    if (simpsons.length === 0)
      return res
        .status(404)
        .send({ message: "DOOOO!!! Não existem personagens cadastrados!" });
    return res.send({ simpsons });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const simpson = await Simpson.findById(id);
    if (!simpson) {
      res.status(404).json({ message: "DOOO!!! Personagem não encontrado" });
      return;
    }
    return res.send({ simpson });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, caracteristica, genero, imagem } = req.body;

  if (!nome || !caracteristica || !genero || !imagem) {
    res.status(400).send({
      message: "DOOOO!!!! Você não enviou todos os dados !! desse jeito vou pro MOE",
    });
    return;
  }

  const newSimpson = await new Simpson({
    nome,
    caracteristica,
    genero,
    imagem,
  });

  try {
    await newSimpson.save();
    return res
      .status(201)
      .send({ message: "UHUUUU!!! Personagem criado com sucesso", newSimpson});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { nome, caracteristica, genero, imagem } = req.body;

  if (!nome || !caracteristica || !genero || !imagem) {
    res.status(400).send({
      message: "DOOOO!!!! Você não enviou todos os dados !! desse jeito vou pro MOE",
    });
    return;
  }

  res.simpson.nome = nome;
  res.simpson.caracteristica = caracteristica;
  res.simpson.genero = genero;
  res.simpson.imagem = imagem;

  try {
    await res.simpson.save();
    res.send({ message: "UHUUUUUUU!!!  Personagem alterado com sucesso!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.simpson.remove();
    return res.send({ message: "Personagem removido com sucesso!" });
  } catch (err) {
    return res.status(500).send({ erro: err.message });
  }
};

const filterByName = async (req, res) => {
  const nome = req.query.nome;
  if (!nome) {
    res.status(400).send({ erro: "Parametro não recebido" });
    return;
  }
  try {
    const simpsons = await Simpson.find({ nome: { $regex: `${nome}` } });
    return res.send({ simpsons });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const filterAll = async (req, res) => {
  let { nome, genero } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !genero ? (genero = "") : (genero = genero);

  try {
    const simpsons = await Simpson.find({
      nome: { $regex: `${nome}`, $options: 'i' },
      genero: { $regex: `${genero}`, $options: 'i'},
    });

    if (simpsons.length === 0)
      return res.status(404).send({ erro: "Personagem não encontrado" });

    return res.send({ simpsons });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByName,
  filterAll,
};