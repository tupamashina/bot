import { COMMANDS, START_CAPTION, TESTS } from './constants.ts';
import {
  appointmentConversation,
  appointmentConversationId,
} from './conversations/appointment.ts';
import { grammy, grammyConversation } from './deps.ts';
import { Context } from './types.ts';

export const bot = new grammy.Bot<Context>(Deno.env.get('BOT_TOKEN')!);

bot.use(
  grammy.session({ initial: () => ({}) }),
  grammyConversation.conversations(),
  grammyConversation.createConversation(appointmentConversation),
);

bot.command('start', (context) =>
  context.replyWithPhoto(
    'https://www.tltsu.ru/upload/dev2fun_opengraph/930/93066a7c788ed7206279c66d6a12b508.jpg',
    {
      caption: `Привет, ${
        context.message?.from.first_name || 'незнакомец'
      }! ${START_CAPTION}`,
    },
  ));

bot.command('help', (context) => context.reply(COMMANDS));

bot.command(
  'appointment',
  (context) => context.conversation.enter(appointmentConversationId),
);

bot.command(
  'tests',
  (context) =>
    context.reply('Тесты:', {
      reply_markup: Object.entries(TESTS).reduce(
        (prevKeyboard, [text, url], index) => {
          const keyboard = prevKeyboard.url(text, url);
          return !(index % 2) ? keyboard.row() : keyboard;
        },
        new grammy.InlineKeyboard(),
      ),
    }),
);
