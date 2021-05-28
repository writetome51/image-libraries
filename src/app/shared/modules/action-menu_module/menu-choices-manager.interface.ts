import { MenuChoice } from './menu-choice.interface';


export interface MenuChoicesManager {

	manage: (...args) => void;

	getChoices: (...args) => MenuChoice[];

}
