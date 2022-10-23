import { personalCabinetCommand } from './personalCabinet.ts';
import { startCommand } from './start.ts';
import { studentListCommand } from './studentList.ts';

export const commands = {
  start: startCommand,
  personal_cabinet: personalCabinetCommand,
  student_list: studentListCommand,
};
