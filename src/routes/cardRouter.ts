import { Router } from "express";

import validateToken from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import cardSchema from "../schemas/cardSchema.js";
import { createCard, getCard, getCards, deleteCard } from "../controllers/cardController.js";

const cardRouter = Router();

cardRouter.post("/create/card", validateToken, validateSchema(cardSchema), createCard)
cardRouter.get("/card/:infoId", validateToken, getCard)
cardRouter.get("/cards", validateToken, getCards)
cardRouter.delete("/card/delete/:infoId", validateToken, deleteCard)

export default cardRouter
