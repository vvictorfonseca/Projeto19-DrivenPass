import prisma from "../config/database.js";
import { CreateNoteData } from "../services/noteService.js";

async function createNote(note: CreateNoteData) {
    await prisma.notes.create({data: note})
}

async function allNotes(userId: number) {
    const notes = await prisma.notes.findMany({where: {userId}})
    return notes
}

async function findNoteByid(id: number, userId: number) {
    const note = await prisma.notes.findMany({where: {id, userId}})
    return note
}

async function deleteNoteById(id: number, userId: number) {
    const note = await prisma.notes.deleteMany({where: {id, userId}})
    return note
}

const noteRepository = {
    createNote,
    allNotes,
    findNoteByid,
    deleteNoteById
}

export default noteRepository