import { Request, Response } from "express";
import userService, { CreateUserData } from "../services/userService.js";

async function createNewUser(req: Request, res: Response) {
    const newUser: CreateUserData = req.body

    await userService.createNewUser(newUser)
    res.sendStatus(201)
}

async function loginUser(req: Request, res: Response) {
    const loginUser: CreateUserData = req.body

    const token = await userService.loginUser(loginUser)
    return res.status(200).send(token)
}

export { createNewUser, loginUser };