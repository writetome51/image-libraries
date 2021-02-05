import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from './remove-parent-labels-for-display.service';
import { AbstractMenuChoiceComponent } from './abstract-menu-choice.component';


export abstract class LabelledMenuChoiceComponent extends AbstractMenuChoiceComponent {

	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}

}
