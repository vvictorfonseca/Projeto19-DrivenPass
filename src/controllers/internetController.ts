import { Request, Response } from "express";
import internetService, { CreateWifiCard } from "../services/internetService.js";

async function createWifiInfo(req: Request, res: Response) {
    const info = req.body
    const userId = res.locals.user.id
    const wifiInfo: CreateWifiCard = {...info, userId}

    await internetService.createWifiInfo(wifiInfo)
    return res.sendStatus(201);
}

async function getWifiInfos(req: Request, res: Response) {
    const userId: number = res.locals.user.id

    const wifiInfos = await internetService.allWifiInfos(userId)
    return res.send(wifiInfos).status(200)
}

async function getWifiInfo(req: Request, res: Response) {
    const userId: number = res.locals.user.id
    const infoId = parseInt(req.params.infoId)

    const wifiInfo = await internetService.findWifiInfoByIds(infoId, userId);
    return res.send(wifiInfo).status(200)
}

async function deleteWifiInfo(req: Request, res: Response) {
    const userId: number = res.locals.user.id
    const infoId = parseInt(req.params.infoId)

    const wifiInfo = await internetService.deleterWifiByIds(infoId, userId);

    if (wifiInfo) {
        return res.sendStatus(200)
    
    } else {
        return res.send("wifi info not found").status(404)
    } 
}

export { createWifiInfo, getWifiInfos, getWifiInfo, deleteWifiInfo }