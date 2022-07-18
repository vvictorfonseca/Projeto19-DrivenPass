import { wifi } from "@prisma/client";
import internetRepository from "../repositories/internetRepository.js";
import { encryptPassword, decryptPassword } from "../utils/encryptNumbers.js";

export type CreateWifiCard = Omit<wifi, "id" | "createdAt">

async function createWifiInfo(wifiInfo: CreateWifiCard) {

    const passwordEncrypted = encryptPassword(wifiInfo.password)
    wifiInfo.password = passwordEncrypted

    return await internetRepository.createWifiInfo(wifiInfo)
}

async function allWifiInfos(userId: number) {
    const wifiInfos = await internetRepository.allWifiInfos(userId)

    if (wifiInfos.length == 0) {
        throw { type: "not_found", message: "no wifi infos registered" }
    }

    wifiInfos.forEach(
        (info) => info.password = decryptPassword(info.password)
    )

    return wifiInfos
}

async function findWifiInfoByIds(infoId: number, userId: number) {
    const wifiInfo = await internetRepository.findWifiInfoByIds(infoId, userId);

    if (wifiInfo.length == 0) {
        throw { type: "not_found", message: "invalid wifi" }
    }

    wifiInfo.forEach(
        (info) => info.password = decryptPassword(info.password)
    )

    return wifiInfo
}

async function deleterWifiByIds(infoId: number, userId: number) {
    const wifiInfo = await internetRepository.deleterWifiByIds(infoId, userId)

    if (!wifiInfo) {
        throw { type: "not_found", message: "invalid wifi" }
    }

    return wifiInfo
}

const internetService = {
    createWifiInfo,
    allWifiInfos,
    findWifiInfoByIds,
    deleterWifiByIds
}

export default internetService