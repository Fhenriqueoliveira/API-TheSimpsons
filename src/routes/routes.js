const routes = require("express").Router();

const SimpsonController = require("../controllers/simpsonsController");
const SimpsonMiddleware = require("../middlewares/simpsonsMiddlewares");

routes.get("/simpsons", SimpsonController.getAll);
routes.get(
  "/simpsons/:id",
  SimpsonMiddleware.validaID,
  SimpsonController.getById
);
routes.post("/simpsons", SimpsonController.create);
routes.put(
  "/simpsons/:id",
  SimpsonMiddleware.validaID,
  SimpsonController.update
);
routes.delete(
  "/simpsons/:id",
  SimpsonMiddleware.validaID,
  SimpsonController.del
);
routes.get("/filterByName", SimpsonController.filterByName);
routes.get("/filterAll", SimpsonController.filterAll);

module.exports = routes;