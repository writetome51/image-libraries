import { AbstractMenuChoiceComponent } from './abstract-menu-choice.component';
import { getByIndex } from '@writetome51/array-get-by-index';


export abstract class LabelledMenuChoiceComponent extends AbstractMenuChoiceComponent {

	get label(): string {
		return this.__removeParentLabelsForDisplay(this.data.label);
	}


	private __removeParentLabelsForDisplay(label: string) {
		// If this menu choice is in a submenu, its label will have dot-notation to separate
		// parent labels from child labels.
		// All the text before the final dot are parent labels.

		return getByIndex(-1, label.split('.'));
	}

}
