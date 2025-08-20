import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function connectDB() {
    try {
        await prisma.$connect();
        console.log("✅ PostgreSQL connected successfully via Prisma")
    } catch (error) {
        console.error("❌ PostgreSQL connection error:", error);
    }
}

export {prisma, connectDB};
