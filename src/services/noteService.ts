import { notes } from "@prisma/client";
import noteRepository from "../repositories/noteRepository.js";
import { encryptPassword, decryptPassword } from "../utils/encryptNumbers.js";

export type CreateNoteData = Omit<notes, "id">

async function createNote(note: CreateNoteData) {
    
    return await noteRepository.createNote(note)
}

async  function allNotes(userId: number) {
    const notes = await noteRepository.allNotes(userId)

    if (!notes) {
        throw { type: "not_found", message: "no notes registered" }
    }

    return notes
}

async function findNoteById(infoId: number, userId: number) {
    const note = await noteRepository.findNoteByid(infoId, userId)

    if (!note) {
        throw { type: "not_found", message: "invalid note" }
    }

    return note
}

async function deleteNote(infoId: number, userId: number) {
    const note = await noteRepository.deleteNoteById(infoId, userId)

    if (!note) {
        throw { type: "not_found", message: "invalid note" }
    }

    return note
}

const noteService = {
    createNote,
    allNotes,
    findNoteById,
    deleteNote
}

export default noteService