import { getByIndex } from '@writetome51/array-get-by-index';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';


export abstract class LabeledMenuChoiceComponent extends HasDataInputComponent<MenuChoice> {

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
