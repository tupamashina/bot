import { grammy, grammyConversation } from './deps.ts';
import { commands } from './commands/index.ts';
import { conversations } from './conversations/index.ts';
import { queries } from './queries/index.ts';
import { Context, Session } from './types/bot.ts';
import { studentMiddleware } from './middlewares/student.ts';

export const bot = new grammy.Bot<Context>(Deno.env.get('BOT_TOKEN')!);

bot.use(
  grammy.session({ initial: (): Session => ({}) }),
  studentMiddleware,
  grammyConversation.conversations(),
  ...Object.entries(conversations).map(([id, conversation]) =>
    grammyConversation.createConversation(conversation, id)
  ),
);

for (const [name, command] of Object.entries(commands)) {
  bot.command(name, command);
}

for (const [trigger, query] of Object.entries(queries)) {
  bot.callbackQuery(trigger, query);
}
