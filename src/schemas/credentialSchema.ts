import Joi from "joi";
import { CreateCredentialsData } from "../services/credentialService.js";

const credentialSchema = Joi.object<CreateCredentialsData>({
    tittle: Joi.string().required(),
    url: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required()
})

export default credentialSchema