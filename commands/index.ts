import { cancelCommand } from './cancel.ts';
import { codeWordCommand } from './codeWord.ts';
import { personalCabinetCommand } from './personalCabinet.ts';
import { startCommand } from './start.ts';

export const commands = {
  start: startCommand,
  personal_cabinet: personalCabinetCommand,
  code_word: codeWordCommand,
  cancel: cancelCommand,
};
