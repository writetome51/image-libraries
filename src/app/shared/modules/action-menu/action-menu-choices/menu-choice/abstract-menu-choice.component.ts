import { Input } from '@angular/core';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from '@menu-choice/remove-parent-labels-for-display.service';


export abstract class AbstractMenuChoiceComponent {

	@Input() data: MenuChoice;


	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}

}
