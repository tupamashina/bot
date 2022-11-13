import { grammyMenu } from '../deps.ts';
import { Context } from '../types-new/Context.ts';
import { Menu } from '../types-new/Menu.ts';
import { createId } from './createId.ts';

type Dependencies = Menu['dependencies'];
type Options = grammyMenu.MenuOptions<Context>;

export function createMenu(dependencies?: Dependencies): Menu;
export function createMenu(options: Options, dependencies?: Dependencies): Menu;

export function createMenu(
  ...args: [Dependencies?] | [Options, Dependencies?]
): Menu {
  let options: Options = {};
  let dependencies: Dependencies = [];

  switch (args.length) {
    case 2: {
      options = args[0], dependencies = args[1] || [];
      break;
    }

    case 1: {
      if (Array.isArray(args[0])) dependencies = args[0];
      else options = (args[0] || {}) as Options;

      break;
    }
  }

  // @ts-expect-error: redefining the visibility of the menu id
  return Object.assign(new grammyMenu.Menu(createId(), options), {
    dependencies,
  });
}
