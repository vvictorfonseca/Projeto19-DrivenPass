import Cryptr from "cryptr";

export function encryptPassword(password: string) {
    const cryptr = new Cryptr('minhasenha');
    const credentialPasswordEncrypted = cryptr.encrypt(password);

    return credentialPasswordEncrypted;
}

export function decryptPassword(password: string) {
    const cryptr = new Cryptr('minhasenha');
    const credentialPasswordDecryptes = cryptr.decrypt(password);

    return credentialPasswordDecryptes;
}