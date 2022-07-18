import { cards } from "@prisma/client";
import cardRepository from "../repositories/cardRepository.js";
import { encryptPassword, decryptPassword } from "../utils/encryptNumbers.js";

export type CreateCardData = Omit<cards, "id" | "createdAt">

async function createCard(card: CreateCardData) {

    const info = await cardRepository.findCardByTittle(card)

    if (info) {
        throw { type: "conflict", message: "already have a credential tittle with this name" }
    }

    const securityCodeEncrypted = encryptPassword(card.securityCode)
    card.securityCode = securityCodeEncrypted

    const passwordEncrypted = encryptPassword(card.password)
    card.password = passwordEncrypted

    return await cardRepository.createCard(card)
}

async function allCards(userId: number) {
    const cards = await cardRepository.allCards(userId)

    if (!cards) {
        throw { type: "not_found", message: "no cards registered" }
    }

    cards.forEach(
        (info) => info.securityCode = decryptPassword(info.securityCode)
    )
    
    cards.forEach(
        (info) => info.password = decryptPassword(info.password)
    )

    return cards;
}

async function findCardByIds(infoId: number, userId: number) {
    const card = await cardRepository.findCardByIds(infoId, userId);

    if (!card) {
        throw { type: "not_found", message: "invalid card" }
    }

    card.forEach(
        (info) => info.securityCode = decryptPassword(info.securityCode)
    )
    
    card.forEach(
        (info) => info.password = decryptPassword(info.password)
    )

    return card
}

async function deleteCardByIds(infoId: number, userId: number) {
    const card = await cardRepository.deleteCardByIds(infoId, userId)

    if (!card) {
        throw { type: "not_found", message: "invalid card" }
    }

    return card
}

const cardService = {
    createCard,
    allCards,
    findCardByIds,
    deleteCardByIds
}

export default cardService