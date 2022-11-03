import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { serve } from 'https://deno.land/std@0.159.0/http/server.ts';
import { bot } from './bot.ts';
import { grammy } from './deps.ts';

// ============== Патч для правильной работы json'а с bigint'ами ==============
const { stringify: originalStringify, parse: originalParse } = JSON;

JSON.stringify = (value) =>
  originalStringify(
    value,
    (_, value) => typeof value === 'bigint' ? `${value}n` : value,
  );

JSON.parse = (text) =>
  originalParse(
    text,
    (_, value) => /^-?\d+n$/.test(value) ? BigInt(value.slice(0, -1)) : value,
  );
// ============================================================================

const handleUpdate = grammy.webhookCallback(bot, 'std/http');

serve((req) => {
  if (req.method === 'POST') {
    if (new URL(req.url).pathname.slice(1) === bot.token) {
      try {
        return handleUpdate(req);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return new Response();
}, {
  onListen: ({ hostname, port }) =>
    console.info(`Server is listening on ${hostname}:${port}`),
});
