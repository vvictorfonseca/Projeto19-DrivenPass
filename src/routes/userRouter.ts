import { Router } from "express";

import { createNewUser, loginUser } from "../controllers/userController.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import authSchema  from "../schemas/authSchema.js";

const userRouter = Router()

userRouter.post("/signup", validateSchema(authSchema), createNewUser)
userRouter.post("/signin", validateSchema(authSchema), loginUser)

export default userRouter