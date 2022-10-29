import { prisma, zod } from '../deps.ts';

const mentorSchema: zod.ZodType<prisma.Mentor> = zod.z.object({
  id: zod.z.bigint(),

  name: zod.z.string(),
  isApproved: zod.z.boolean(),

  tgChatId: zod.z.bigint(),
  tgUserId: zod.z.bigint(),
  tgUsername: zod.z.string().nullable(),

  projectId: zod.z.bigint().nullable(),
}).strict();

export const isMentor = (value: unknown): value is prisma.Mentor =>
  mentorSchema.safeParse(value).success;
