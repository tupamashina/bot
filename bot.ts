import { callbacks } from './callbacks/mod.ts';
import { commands } from './commands/mod.ts';
import { codeWordInputConversation } from './conversations/codeWordInput.ts';
import { mentorRegistrationConversation } from './conversations/mentorRegistration.ts';
import { projectCreationConversation } from './conversations/projectCreation.ts';
import { studentRegistrationConversation } from './conversations/studentRegistration.ts';
import { grammy, grammyConversation } from './deps.ts';
import { adminCabinetMenu } from './menus/adminCabinet.ts';
import { mentorCabinetMenu } from './menus/mentorCabinet.ts';
import { projectCreationMenu } from './menus/projectCreation.ts';
import { registrationMenu } from './menus/registration.ts';
import { signingUpForProjectMenu } from './menus/signingUpForProject.ts';
import { studentCabinetMenu } from './menus/studentCabinet.ts';
import { sessionMiddleware } from './middlewares/sessionMiddleware.ts';
import { Context } from './types/Context.ts';
import { ConversationId } from './types/Conversations.ts';
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
  grammyConversation.createConversation(
    codeWordInputConversation,
    ConversationId.CODE_WORD_INPUT,
  ),
  studentCabinetMenu,
  mentorCabinetMenu,
  adminCabinetMenu,
  grammyConversation.createConversation(
    projectCreationConversation,
    ConversationId.PROJECT_CREATION,
  ),
  signingUpForProjectMenu,
  projectCreationMenu,
  grammyConversation.createConversation(
    studentRegistrationConversation,
    ConversationId.STUDENT_REGISTRATION,
  ),
  grammyConversation.createConversation(
    mentorRegistrationConversation,
    ConversationId.MENTOR_REGISTRATION,
  ),
  registrationMenu,
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
