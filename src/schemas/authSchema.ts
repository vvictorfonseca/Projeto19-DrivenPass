import Joi from "joi";
import { CreateUserData } from "../services/userService.js";

const authSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(10)
})

export default authSchema