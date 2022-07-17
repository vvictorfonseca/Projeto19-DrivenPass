import Joi from "joi";
import { CreateNoteData } from "../services/noteService.js";

const noteSchema = Joi.object<CreateNoteData>({
    tittle: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})

export default noteSchema