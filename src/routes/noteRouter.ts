import { Router } from "express";

import validateToken from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import noteSchema from "../schemas/noteSchema.js";
import { createNote, getNotes, getNoteByIds, deleteNote } from "../controllers/noteController.js";

const noteRouter = Router();

noteRouter.post("/create/note", validateToken, validateSchema(noteSchema), createNote);
noteRouter.get("/note/:infoId", validateToken, getNoteByIds);
noteRouter.get("/notes", validateToken, getNotes);
noteRouter.delete("/note/delete/:infoId", validateToken, deleteNote)


export default noteRouter;