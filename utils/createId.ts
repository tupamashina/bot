import { customAlphabet } from 'https://deno.land/x/nanoid@v3.0.0/mod.ts';

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const createId = customAlphabet(alphabet, 5);
