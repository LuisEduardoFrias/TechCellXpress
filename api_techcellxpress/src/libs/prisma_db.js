//
/*
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForaPrisma = globalThis;

const prisma = globalForaPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if(process.env.NODE_ENV !== 'production') globalForaPrisma.prisma = prisma;

*/

class User {
  create() {
    return true;
  }
  findUnique() {
    return true;
  }
}

class Prisma {
  constructor() {
    this.user = new User();
  }
}

const prisma = new Prisma();
export default prisma;