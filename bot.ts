import { callbacks } from './callbacks/mod.ts';
import { commands } from './commands/mod.ts';
import { grammy, grammyConversation } from './deps.ts';
import { middlewares } from './middlewares/mod.ts';
import { Context } from './types/Context.ts';
import { Session } from './types/Session.ts';

export const bot = new grammy.Bot<Context>(Deno.env.get('BOT_TOKEN')!);

bot.use(
  grammy.session({ initial: (): Session => ({ user: null }) }),
  grammyConversation.conversations(),
  ...middlewares,
);

for (const [trigger, handler] of callbacks) {
  bot.callbackQuery(trigger, ...(Array.isArray(handler) ? handler : [handler]));
}

for (const [command, handler] of commands) {
  bot.command(command, ...(Array.isArray(handler) ? handler : [handler]));
}

bot.api.setMyCommands(
  Array.from(commands.entries()).map(([command, handler]) => ({
    command: Array.isArray(command) ? command[0] : command,
    description: Array.isArray(handler)
      ? handler[0].description
      : handler.description,
  })),
);
