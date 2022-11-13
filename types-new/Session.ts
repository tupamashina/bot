import { prisma } from '../deps.ts';

export interface Session {
  user: prisma.Admin | prisma.Mentor | prisma.Student | null;
}
