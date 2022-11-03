import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';

export const loadEnv = (isDev: boolean) => {
  const env = config();
  const devEnv = isDev ? config({ path: '.env.development' }) : {};

  for (const [key, value] of Object.entries({ ...env, ...devEnv })) {
    Deno.env.set(key, value);
  }
};
