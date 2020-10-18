import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ContextGraphql {
  prisma: PrismaClient;
}

export async function createGraphqlContext({
  req,
}: {
  req: Request;
  res: Response;
}): Promise<ContextGraphql> {
  return {
    prisma,
  };
}
