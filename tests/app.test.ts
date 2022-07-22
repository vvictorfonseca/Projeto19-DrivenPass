import app from "../src/app.js";
import supertest from 'supertest';

import prisma from "../src/config/database.js";

const body  = {
    "email": "vvictor.h.fonseca@gmail.com",
    "password": "1531Lotr29"
};

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`
});

describe("POST /signup", () => {
    it("given a valid signup task it should return 201", async () => {

        const result = await supertest(app).post("/signup").send(body)
        const status = result.status;

        expect(status).toEqual(201)
    })
})

describe("POST /signin", () => {
    it("given valid email and password it should return token", async () => {
        const body  = {
            "email": "vvictor.h.fonseca@gmail.com",
            "password": "1531Lotr29"
        };

        const result = await supertest(app).post("/signin").send(body)
        const token = result.body.token

        expect(token).not.toBe(null)
    })
})

describe("POST /signup", () => {
    it("given email and password already in use, it should return 409", async () => {
        await supertest(app).post("/signup").send(body)

        const result = await supertest(app).post("/signup").send(body)
        const status = result.status;

        expect(status).toBe(409)
    })
})

afterAll(async () => {
    await prisma.$disconnect
})