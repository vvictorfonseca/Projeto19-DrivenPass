import Cryptr from "cryptr";

export function encryptCredentialPassword(password: string) {
    const cryptr = new Cryptr('minhasenha');
    const credentialPasswordEncrypted = cryptr.encrypt(password);

    return credentialPasswordEncrypted;
}

export function decryptCredentialPassword(password: string) {
    const cryptr = new Cryptr('minhasenha');
    const credentialPasswordDecryptes = cryptr.decrypt(password);

    return credentialPasswordDecryptes;
}