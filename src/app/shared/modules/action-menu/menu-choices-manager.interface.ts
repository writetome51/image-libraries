import { MenuChoice } from './menu-choice.interface';


export interface MenuChoicesManager {

	getChoices: (...args) => MenuChoice[];

}
