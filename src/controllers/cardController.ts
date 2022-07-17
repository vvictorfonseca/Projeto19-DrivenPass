import { Request, Response } from "express";
import cardService, { CreateCardData } from "../services/cardService.js";

async function createCard(req: Request, res: Response) {
    const info = req.body
    const userId = res.locals.user.id
    const card: CreateCardData = {...info, userId}

    await cardService.createCard(card);
    return res.sendStatus(201);
}

async function getCards(req: Request, res: Response) {
    const userId = res.locals.user.id

    const cards = await cardService.allCards(userId);
    return res.status(200).send(cards);
}

async function getCard(req: Request, res: Response) {
    const userId = res.locals.user.id
    const infoId = parseInt(req.params.infoId)

    const card = await cardService.findCardByIds(infoId, userId);
    return res.status(200).send(card);
}

async function deleteCard(req: Request, res: Response) {
    const userId = res.locals.user.id
    const infoId = parseInt(req.params.infoId)

    await cardService.deleteCardByIds(infoId, userId)
    return res.sendStatus(200)
}

export { createCard, getCard, getCards, deleteCard };