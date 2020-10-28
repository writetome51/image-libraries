import { ActionMenuChoice } from '@interfaces/action-menu-choice';


export interface AppActionSubmenu {
	choices: ActionMenuChoice[];
	label: string;
	parentLabel?: string; // Must have this if it's a submenu of a submenu.
}
