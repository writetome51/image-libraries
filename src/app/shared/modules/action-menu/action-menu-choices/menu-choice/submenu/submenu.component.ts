import { Component, Input } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';
import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from '../remove-parent-labels-for-display.service';


@Component({
	selector: 'submenu',
	template: `
		<ng-container>
			<div class="label-container">
				{{ label }} <submenu-pointer></submenu-pointer>
			</div>

			<ul *ngIf="clicked" class="dropdown-menu">
				<menu-choice *ngFor="let choice of data.submenu" [data]="choice"></menu-choice>
			</ul>
		</ng-container>
	`
})
export class SubmenuComponent {

	@Input() clicked = false;
	@Input() data: MenuChoice;


	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}

}
