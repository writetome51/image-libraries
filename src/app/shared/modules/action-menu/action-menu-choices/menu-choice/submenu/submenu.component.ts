import { Component, Input } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';


@Component({
	selector: 'submenu',
	template: `
		<ng-container>
			<div class="label-container">
				{{ data.label }} <submenu-pointer></submenu-pointer>
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

}
