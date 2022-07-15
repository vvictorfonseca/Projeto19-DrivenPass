import prisma from "../config/database.js";
import { CreateUserData } from "../services/userService.js";

async function createNewUser(newUser: CreateUserData) {
    await prisma.users.create({data: newUser})
}

async function getUserByEmail(email: string) {
    const user = await prisma.users.findFirst({where: {email}})
    return user
}

const userRepository = {
    createNewUser,
    getUserByEmail
}

export default userRepository