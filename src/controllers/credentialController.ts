import { Request, Response } from "express";
import credentialService, { CreateCredentialsData } from "../services/credentialService.js"

async function createCredential(req: Request, res: Response){
    const info = req.body
    const userId =  res.locals.user.id
    console.log("userIdInfo", userId)
    const credential: CreateCredentialsData = {...info, userId}

    await credentialService.createCredential(credential)
    return res.sendStatus(201)
}

async function getCredentials(req: Request, res: Response){
    const userId =  res.locals.user.id
    console.log("userIdInfo", userId)
    
    const credentials = await credentialService.allCredentials(userId)
    return res.status(200).send(credentials)
}

async function getCredential(req: Request, res: Response){
    const infoId  = parseInt(req.params.infoId)
    const userId =  res.locals.user.id

    const credential = await credentialService.findCredentialById(infoId, userId)
    return res.status(200).send(credential)
}

async function deleteCredential(req: Request, res: Response){
    const infoId  = parseInt(req.params.infoId)
    const userId =  res.locals.user.id

    await credentialService.deleteCredentialById(infoId, userId)
    return res.sendStatus(200)
}

export { createCredential, getCredentials, getCredential, deleteCredential }