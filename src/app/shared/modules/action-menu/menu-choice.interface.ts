import { HasLabel } from '@interfaces/has-label.interface';


export interface MenuChoice extends HasLabel {

	submenu?: MenuChoice[];

	data?: any; // to be passed to the choice's processor.

}
