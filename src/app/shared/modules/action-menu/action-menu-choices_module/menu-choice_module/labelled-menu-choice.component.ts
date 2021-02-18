import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from './remove-parent-labels-for-display.service';
import { AbstractMenuChoiceComponent } from './abstract-menu-choice.component';
import { Component } from '@angular/core';


// Intended to be abstract Component class, but angular compiler was not allowing inheritance
// to work.  So this is a work-around.

@Component({selector: '', template: ``})
export class LabelledMenuChoiceComponent extends AbstractMenuChoiceComponent {

	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}

}
