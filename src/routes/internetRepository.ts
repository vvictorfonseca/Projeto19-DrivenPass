import { Router } from "express";

import validateToken from "../middlewares/authMiddleware.js";
import internetSchema from "../schemas/internetSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { createWifiInfo, getWifiInfos, getWifiInfo, deleteWifiInfo } from "../controllers/internetController.js";

const internetRouter = Router();

internetRouter.post("/create/wifiInfo", validateToken, validateSchema(internetSchema), createWifiInfo);
internetRouter.get("/wifiInfo/:infoId", validateToken, getWifiInfo);
internetRouter.get("/wifiInfos", validateToken, getWifiInfos);
internetRouter.delete("/wifiInfo/delete/:infoId", validateToken, deleteWifiInfo);

export default internetRouter;