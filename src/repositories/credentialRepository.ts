import prisma from "../config/database.js";
import { CreateCredentialsData } from "../services/credentialService.js";

async function createCredential(credential: CreateCredentialsData) {
    await prisma.credentials.create({data: credential})
}

async function allCredentialsById(userId: number) {
    const credentials = await prisma.credentials.findMany({where: {userId}})
    return credentials
}

async function findCredentialById(id: number, userId: number) {
    const credential = await prisma.credentials.findMany({where: {id, userId}});
    return credential
}

async function deleteCredentialById(id: number, userId: number) {
    const credential = await prisma.credentials.deleteMany({where: {id, userId}})
    return credential
}

const credentialRepository = {
    createCredential,
    allCredentialsById,
    findCredentialById,
    deleteCredentialById
}

export default credentialRepository;