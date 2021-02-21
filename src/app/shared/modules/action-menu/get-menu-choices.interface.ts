import { MenuChoice } from './menu-choice.interface';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


export interface GetMenuChoices extends IDoThis {

	go: (...args) => MenuChoice[];

}
