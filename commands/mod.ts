import { Commands } from '../types/Commands.ts';
import { personalCabinetCommand } from './personalCabinet.ts';
import { startCommand } from './start.ts';

export const commands: Commands = new Map();

commands.set('start', startCommand);
commands.set('personal_cabinet', personalCabinetCommand);
