import { MenuChoice } from './menu-choice';


export interface MenuChoicesManager {

	getChoices: (...args) => MenuChoice[];

}
