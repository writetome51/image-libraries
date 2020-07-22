import { Submenu } from '../../../../interfaces/submenu';


export class ActionMenuChoicesData {

	static data: Array<string | Submenu>;


	static setDefault() {
		this.data = [];
	}

}
