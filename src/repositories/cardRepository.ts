import prisma from "../config/database.js";
import { CreateCardData } from "../services/cardService.js";

async function createCard(card: CreateCardData) {
    await prisma.cards.create({data: card})
}

async function allCards(userId: number) {
    const cards = await prisma.cards.findMany({where: {userId}})
    return cards
}

async function findCardByIds(id: number, userId: number) {
    const card = await prisma.cards.findMany({where: {id, userId}})
    return card
}

async function deleteCardByIds(id: number, userId: number) {
    const card = await prisma.cards.deleteMany({where: {id, userId}})
    return card
}

async function findCardByTittle(card: CreateCardData) {
    const info = await prisma.cards.findFirst({where: {tittle: card.tittle, userId: card.userId}})
    return info
}

const cardRepository = {
    createCard,
    allCards,
    findCardByIds,
    deleteCardByIds,
    findCardByTittle
}

export default cardRepository