import { prisma, zod } from '../deps.ts';

const studentSchema: zod.ZodType<prisma.Student> = zod.z.object({
  id: zod.z.bigint(),

  name: zod.z.string(),
  group: zod.z.string(),
  isApproved: zod.z.boolean(),

  stars: zod.z.number().int(),
  hearts: zod.z.number().int(),

  tgChatId: zod.z.bigint(),
  tgUserId: zod.z.bigint(),
  tgUsername: zod.z.string().nullable(),

  projectId: zod.z.bigint().nullable(),
}).strict();

export const isStudent = (value: unknown): value is prisma.Student =>
  studentSchema.safeParse(value).success;
