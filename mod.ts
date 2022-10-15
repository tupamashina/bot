import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { serve } from 'https://deno.land/std@0.159.0/http/server.ts';
import { bot } from './bot.ts';
import { grammy } from './deps.ts';

const handleUpdate = grammy.webhookCallback(bot, 'std/http');

serve(async (req) => {
  if (req.method === 'POST') {
    if (new URL(req.url).pathname.slice(1) === bot.token) {
      try {
        return await handleUpdate(req);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return new Response();
});
