import { codeWordCommand } from './codeWord.ts';
import { personalCabinetCommand } from './personalCabinet.ts';
import { punishTheStudentCommand } from './punishTheStudent.ts';
import { startCommand } from './start.ts';
import { studentListCommand } from './studentList.ts';

export const commands = {
  start: startCommand,
  personal_cabinet: personalCabinetCommand,
  code_word: codeWordCommand,
  student_list: studentListCommand,
  punish_the_student: punishTheStudentCommand,
};
