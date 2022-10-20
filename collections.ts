import { mongo } from './deps.ts';
import { StudentSchema } from './types/schemas.ts';

const mongoClient = new mongo.MongoClient();
const db = await mongoClient.connect(Deno.env.get('DB_URL')!);

export const students = db.collection<StudentSchema>('students');
