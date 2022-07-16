import { Router } from "express";

import validateToken from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import credentialSchema from "../schemas/credentialSchema.js";
import { createCredential, getCredentials, getCredential, deleteCredential } from "../controllers/credentialController.js";

const credentialRouter = Router();

credentialRouter.post("/create/credential", validateToken, validateSchema(credentialSchema), createCredential);
credentialRouter.get("/credential/:infoId", validateToken, getCredential)
credentialRouter.get("/credentials", validateToken, getCredentials)
credentialRouter.delete("/credential/delete/:infoId", validateToken, deleteCredential)

export default credentialRouter;