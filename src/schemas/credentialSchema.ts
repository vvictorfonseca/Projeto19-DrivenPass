import Joi from "joi";

const credentialSchema = Joi.object({
    tittle: Joi.string().required(),
    url: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required()
})

export default credentialSchema