import { Component, Input } from '@angular/core';
import { LabeledMenuChoiceComponent } from '../labeled-menu-choice.abstract.component';


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
export class SubmenuComponent extends LabeledMenuChoiceComponent {

	@Input() clicked = false;

}
