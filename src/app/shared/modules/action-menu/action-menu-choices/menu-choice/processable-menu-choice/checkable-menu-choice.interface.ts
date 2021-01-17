import { MenuChoice } from '@action-menu/menu-choice.interface';
import { CheckableMenuChoiceData } from './checkable-menu-choice-data.interface';


export interface CheckableMenuChoice extends MenuChoice {

	data: CheckableMenuChoiceData;

}
