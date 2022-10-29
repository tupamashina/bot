import { prisma, zod } from '../deps.ts';

const adminSchema: zod.ZodType<prisma.Admin> = zod.z.object({
  id: zod.z.bigint(),
  tgChatId: zod.z.bigint(),
  tgUserId: zod.z.bigint(),
}).strict();

export const isAdmin = (value: unknown): value is prisma.Admin =>
  adminSchema.safeParse(value).success;
