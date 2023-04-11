import { PrismaClient } from "@prisma/client";

var cachedPrisma;
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!cachedPrisma) {
    cachedPrisma = new PrismaClient();
  }
  prisma = cachedPrisma;
}

export const db = prisma;
