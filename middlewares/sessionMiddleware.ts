import { prismaClient } from '../prisma/mod.ts';
import { Middleware } from '../types/Middleware.ts';

export const sessionMiddleware: Middleware = async (context, next) => {
  const tgUserId = context.from?.id;

  const [admin, mentor, student] = await Promise.all([
    prismaClient.admin.findUnique({ where: { tgUserId } }),
    prismaClient.mentor.findUnique({ where: { tgUserId } }),
    prismaClient.student.findUnique({ where: { tgUserId } }),
  ]);

  context.session.user = admin || mentor || student;
  return next();
};
