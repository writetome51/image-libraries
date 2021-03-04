import { MenuChoice } from './menu-choice.interface';
import { CheckableMenuChoiceData } from './checkable-menu-choice-data.interface';


export interface CheckableMenuChoice extends MenuChoice {

	data: CheckableMenuChoiceData;

}
