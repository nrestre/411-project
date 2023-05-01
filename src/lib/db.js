import { PrismaClient } from "@prisma/client";

let cachedPrisma;
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!cachedPrisma) {
    cachedPrisma = new PrismaClient();
  }
  prisma = cachedPrisma;
}

const db = prisma;
export default db;
