const { PrismaClient } = require("@prisma/client");
const { generateKey } = require("./generateKey");

// const { PrismaClient } = require("../prisma/src/prisma-client");
const prisma = new PrismaClient();

async function findUser(key) {
    await prisma.$connect();
    const user = await prisma.keys.findFirst({
        where: {
            "apikey": key
        }
    });
    await prisma.$disconnect();
    return user;
}

async function newKey(username) {
    prisma.$connect();
    let latest = await prisma.keys.count();
    latest++;
    let newUser = await prisma.keys.create({
        data: {
            'username': username,
            'apikey': generateKey(latest)
        }
    })
    prisma.$disconnect();
    return newUser;
}

exports.findUser = findUser;
exports.newKey = newKey;