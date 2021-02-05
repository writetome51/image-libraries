import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from '@menu-choice/remove-parent-labels-for-display.service';
import { AbstractMenuChoiceComponent } from '@menu-choice/abstract-menu-choice.component';


export abstract class LabelledMenuChoiceComponent extends AbstractMenuChoiceComponent {

	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}

}
