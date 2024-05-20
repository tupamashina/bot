import { prisma } from "../deps.ts";
import { withAccelerate } from "npm:@prisma/extension-accelerate@1.0.0";

export const prismaClient = new prisma.PrismaClient().$extends(
  withAccelerate(),
);
