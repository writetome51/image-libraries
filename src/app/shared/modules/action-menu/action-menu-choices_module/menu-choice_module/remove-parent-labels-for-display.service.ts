import { getByIndex } from '@writetome51/array-get-by-index';
// import { IDoThis } from '@interfaces/i-do-this.interface';


export class RemoveParentLabelsForDisplayService { // implements IDoThis

	static go(menuChoiceLabel: string) {
		// If this menu choice is in a submenu, its label will have dot-notation to separate
		// parent labels from child labels.
		// All the text before the final dot are parent labels.

		return getByIndex(-1, menuChoiceLabel.split('.'));
	}

}
