import { MenuChoice } from '@interfaces/menu-choice.interface';
import { CheckableMenuChoiceData } from '@interfaces/checkable-menu-choice-data.interface';


export interface CheckableMenuChoice extends MenuChoice {

	data: CheckableMenuChoiceData;

}
