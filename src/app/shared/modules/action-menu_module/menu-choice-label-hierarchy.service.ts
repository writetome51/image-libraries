import { removeTail } from '@writetome51/array-remove-head-tail';
import { getByIndex } from '@writetome51/array-get-by-index';


export class MenuChoiceLabelHierarchyService {

	static getWithoutParentForDisplay(label: string) {
		// If this menu choice is in a submenu, its label must have dot-notation to separate
		// parent labels from child labels.
		// All the text before the final dot are parent labels.

		return getByIndex(-1, label.split('.'));
	}


	static hasParent(label: string) {
		return (label.includes('.'));
	}


	static getParent(label: string): string {
		let parts = label.split('.');
		removeTail(1, parts);
		return parts.join('.');
	}

}
