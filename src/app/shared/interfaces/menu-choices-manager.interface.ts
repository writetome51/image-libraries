import { MenuChoice } from '@interfaces/menu-choice.interface';


export interface MenuChoicesManager {

	manage: (...args) => void;

	getChoices: (...args) => MenuChoice[];

}
