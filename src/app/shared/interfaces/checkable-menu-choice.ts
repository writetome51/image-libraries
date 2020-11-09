import { MenuChoice } from '@interfaces/menu-choice';


export interface CheckableMenuChoice extends MenuChoice {

	data: { checked: boolean }; // to be passed to the choice's processor.

}
