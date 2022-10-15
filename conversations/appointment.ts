import { createConversationBuilder } from '../utils/createConversationBuilder.ts';

export const [appointmentConversation, appointmentConversationId] =
  createConversationBuilder(async (conversations, context) => {
    await context.reply('Введи своё ФИО и группу:');
    const { message } = await conversations.waitFor('msg:text');

    await context.reply(
      message?.text.toLowerCase().includes('ифэиу')
        ? 'Извини, но набор экономистов закрыт('
        : 'https://vk.com/sanosyan01\nНапиши ему👆, чтобы попасть к нам в команду',
    );
  });
