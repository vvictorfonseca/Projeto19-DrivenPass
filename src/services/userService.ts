import { users } from "@prisma/client";
import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const { JWT_SECRET_KEY } = process.env

export type CreateUserData = Omit<users, "id" | "createdAt">

async function createNewUser(newUser: CreateUserData) {
    const SALT = 10
    const emailExist = await userRepository.getUserByEmail(newUser.email)

    if (!emailExist) {
        newUser.password = bcrypt.hashSync(newUser.password, SALT)
        await userRepository.createNewUser(newUser)
    
    } else {
        throw { type: "conflict", message: "email already exist" }
    }

    if (newUser.password.length < 10) {
        throw { type: "not_allowed", message: "password must have at leats 10 characters long"}
    }

    return 
}

async function loginUser(loginUser: CreateUserData) {
    
    const user = await userRepository.getUserByEmail(loginUser.email)

    const isCorrectPassword = bcrypt.compareSync(loginUser.password, user.password)

    if (!user || !isCorrectPassword) {
        throw { type: "not_found", message: "invalid password" }
    }

    const expiresAt = { expiresIn: 60 * 60 * 24 };
    const token = jwt.sign( {id: user.id, email: loginUser.email}, JWT_SECRET_KEY, expiresAt)
    console.log("token", token)
    return token
}

const userService = {
    createNewUser,
    loginUser
}

export default userService