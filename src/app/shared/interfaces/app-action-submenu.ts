import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';


export interface AppActionSubmenu {
	choices: AppActionMenuChoice[];
	label: string;
	parentLabel?: string; // Must have this if it's a submenu of a submenu.
}
