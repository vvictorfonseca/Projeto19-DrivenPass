import Joi from "joi";
import { CreateCardData } from "../services/cardService.js";

const cardSchema = Joi.object<CreateCardData>({
    tittle: Joi.string().max(50).required(),
    cardNumber: Joi.string().length(16).required(),
    name: Joi.string().required(),
    securityCode: Joi.string().length(3).required(),
    expirationDate: Joi.string().length(5).required(),
    password: Joi.string().required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.valid("credit", "debit", "credit_debit").required()
});

export default cardSchema