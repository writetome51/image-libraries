import { Submenu } from '../../../app/app-action-menu/submenu';


export class ActionMenuChoicesData {

	static data: Array<string | Submenu>;


	static setDefault() {
		this.data = [];
	}

}
