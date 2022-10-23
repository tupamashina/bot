import { grammy, grammyConversation } from './deps.ts';
import { commands } from './commands/index.ts';
import { queries } from './queries/index.ts';
import { Context, Session } from './types/bot.ts';
import { studentMiddleware } from './middlewares/student.ts';
import { conversationsMiddlewares } from './middlewares/conversations.ts';

export const bot = new grammy.Bot<Context>(Deno.env.get('BOT_TOKEN')!);

bot.use(
  grammy.session({ initial: (): Session => ({}) }),
  studentMiddleware,
  grammyConversation.conversations(),
);

bot.command('cancel', (context) => context.conversation.exit());
bot.use(...conversationsMiddlewares);

for (const [name, command] of Object.entries(commands)) {
  bot.command(name, command);
}

for (const [trigger, query] of Object.entries(queries)) {
  bot.callbackQuery(trigger, query);
}

bot.api.setMyCommands([
  ...Object.entries(commands).map((
    [command, { description }],
  ) => ({ command, description })),
  { command: 'cancel', description: 'Прервать выполнение текущей команды' },
]);
