import { callbacks } from './callbacks/mod.ts';
import { commands } from './commands/mod.ts';
import { conversations } from './conversations/mod.ts';
import { grammy, grammyConversation } from './deps.ts';
import { menus } from './menus/mod.ts';
import { sessionMiddleware } from './middlewares/sessionMiddleware.ts';
import { Context } from './types/Context.ts';
import { Session } from './types/Session.ts';

export const bot = new grammy.Bot<Context>(Deno.env.get('BOT_TOKEN')!);

bot.use(
  grammy.session({ initial: (): Session => ({ user: null }) }),
  grammyConversation.conversations(),
  sessionMiddleware,
);

bot.command('cancel', async (context) => {
  await context.conversation.exit();
  await context.reply('Действие отменено.');
});

bot.use(
  ...[...conversations, ...menus].sort((a, b) => {
    if (a.dependencies.includes(b)) return 1;
    if (b.dependencies.includes(a)) return -1;
    return 0;
  }).map((middleware) =>
    'builder' in middleware
      ? grammyConversation.createConversation(middleware.builder, middleware.id)
      : middleware
  ),
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
  })).concat({
    command: 'cancel',
    description: 'Прерывает выполнение текущей команды',
  }),
);
