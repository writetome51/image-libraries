import { Component, Input } from '@angular/core';
import { AbstractMenuChoiceComponent } from '@menu-choice/abstract-menu-choice.component';
import { HasLabel } from '@interfaces/has-label/has-label.interface';


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
export class SubmenuComponent extends AbstractMenuChoiceComponent implements HasLabel {

	@Input() clicked = false;

}
