import { cancelCommand } from './cancel.ts';
import { codeWordCommand } from './codeWord.ts';
import { personalCabinetCommand } from './personalCabinet.ts';
import { startCommand } from './start.ts';
import { studentListCommand } from './studentList.ts';

export const commands = {
  start: startCommand,
  personal_cabinet: personalCabinetCommand,
  code_word: codeWordCommand,
  cancel: cancelCommand,
  student_list: studentListCommand,
};
