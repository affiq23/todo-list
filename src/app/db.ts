import { PrismaClient } from '@prisma/client'

// add prisma client to global object 
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

// set prisma to global variable or create a brand new instance
export const prisma = 
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

// only one sinle client is ever created
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma