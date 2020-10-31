import { ActionMenuChoice } from './action-menu-choice';


export interface ActionMenuChoicesManager {
	getChoices: (...args) => ActionMenuChoice[];
}
