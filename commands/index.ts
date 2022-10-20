import { personalCabinetCommand } from './personalCabinet.ts';
import { startCommand } from './start.ts';

export const commands = {
  start: startCommand,
  personalCabinet: personalCabinetCommand,
};
