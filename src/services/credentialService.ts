import { credentials } from "@prisma/client";
import credentialRepository from "../repositories/credentialRepository.js";
import { encryptPassword, decryptPassword } from "../utils/encryptNumbers.js";

export type CreateCredentialsData = Omit<credentials, "id" | "createdAt">

async function createCredential(credential: CreateCredentialsData) {

    const info = await credentialRepository.findCredentialByTittle(credential)

    if (info) {
        throw { type: "conflict", message: "already have a credential tittle with this name" }
    }
    
    const passwordEncrypted = encryptPassword(credential.password);
    credential.password = passwordEncrypted;

    return await credentialRepository.createCredential(credential);
}

async function allCredentials(id: number) {
    
    const credentials = await credentialRepository.allCredentialsById(id);

    if (credentials.length == 0) {
        throw { type: "not_found", message: "no credentials registered" }
    }

    credentials.forEach(
        (info) => info.password = decryptPassword(info.password)
    )
    
    return credentials;
}

async function findCredentialById(infoId: number, userId: number) {

    const credential = await credentialRepository.findCredentialById(infoId, userId);

    if (credential.length == 0) {
        throw { type: "not_found", message: "invalid credential" }
    }
    
    credential.forEach(
        (info) => info.password = decryptPassword(info.password)
    )

    return credential;
}

async function deleteCredentialById(infoId: number, userId: number) {
    
    const credential = await credentialRepository.deleteCredentialById(infoId, userId)

    if (credential) {
        throw { type: "not_found", message: "invalid credential" }
    }

    return credential
}

const credentialService = {
    createCredential,
    allCredentials,
    findCredentialById,
    deleteCredentialById
}

export default credentialService;
