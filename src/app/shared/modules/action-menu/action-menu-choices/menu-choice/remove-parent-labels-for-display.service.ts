import { getByIndex } from '@writetome51/array-get-by-index';
// import { IDoThis } from '@interfaces/i-do-this.interface';


export class RemoveParentLabelsForDisplayService { // implements IDoThis

	static go(label: string) {
		// If this menu choice is in a submenu, its label will have dot-notation.
		// Only the text after the final dot should be visible.

		return getByIndex(-1, label.split('.'));
	}

}
