import { Request, Response } from "express";
import noteService, { CreateNoteData } from "../services/noteService.js";

async function createNote(req: Request, res: Response) {
    const info = req.body
    const userId = res.locals.user.id
    const note: CreateNoteData = {...info, userId}

    await noteService.createNote(note);
    return res.sendStatus(201);
}

async function getNotes(req: Request, res: Response) {
    const userId = res.locals.user.id
    
    const notes = await noteService.allNotes(userId)
    return res.status(200).send(notes)
}

async function getNoteByIds(req: Request, res: Response) {
    const userId = res.locals.user.id
    const infoId = parseInt(req.params.infoId)

    const note = await noteService.findNoteById(infoId, userId)
    return res.status(200).send(note)
}

async function deleteNote(req: Request, res: Response) {
    const userId = res.locals.user.id
    const infoId = parseInt(req.params.infoId)

    await noteService.deleteNote(infoId, userId)
    return res.sendStatus(200)
}

export { createNote, getNotes, getNoteByIds, deleteNote }