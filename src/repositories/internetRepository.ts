import prisma from "../config/database.js";
import { CreateWifiCard } from "../services/internetService.js";

async function createWifiInfo(wifiInfo: CreateWifiCard) {
    await prisma.wifi.create({data: wifiInfo})
}

async function allWifiInfos(userId: number) {
    const wifiInfos = await prisma.wifi.findMany({where: {userId}})
    return wifiInfos
}

async function findWifiInfoByIds(id: number, userId: number) {
    const wifiInfo = await prisma.wifi.findMany({where: {id, userId}})
    return wifiInfo
}

async function deleterWifiByIds(id: number, userId: number) {
    const wifi = await prisma.wifi.deleteMany({where: {id, userId}})
    return wifi
}

const internetRepository = {
    createWifiInfo,
    allWifiInfos,
    findWifiInfoByIds,
    deleterWifiByIds,
}

export default internetRepository;