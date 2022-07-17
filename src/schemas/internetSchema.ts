import Joi from "joi"
import { CreateWifiCard } from "../services/internetService.js"

const internetSchema = Joi.object<CreateWifiCard>({
    tittle: Joi.string().required(),
    wifiNetwork: Joi.string().required(),
    password: Joi.string().required()
})

export default internetSchema