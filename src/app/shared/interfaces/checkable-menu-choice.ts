import { MenuChoice } from '@interfaces/menu-choice';


export interface CheckableMenuChoice extends MenuChoice {

	data: {
		checked: boolean;

		[propName: string]: any;
	};

}
