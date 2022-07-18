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

async function findCredentialByTittle(credential: CreateCredentialsData) {
    const info = await prisma.credentials.findFirst({where: {tittle: credential.tittle, userId: credential.userId}})
    return info
}

const credentialRepository = {
    createCredential,
    allCredentialsById,
    findCredentialById,
    deleteCredentialById,
    findCredentialByTittle
}

export default credentialRepository;