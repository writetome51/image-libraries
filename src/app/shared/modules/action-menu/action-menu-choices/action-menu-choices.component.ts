import { Component, Input } from '@angular/core';
import { MenuChoice } from '@action-menu/menu-choice.interface';


@Component({
	selector: 'action-menu-choices',
	template: `
		<ul class="dropdown-menu action-menu">
			<menu-choice *ngFor="let choice of data" [data]="choice"></menu-choice>
		</ul>
	`,
	styleUrls: ['./action-menu-choices.component.css']
})
export class ActionMenuChoicesComponent {

	@Input() data: MenuChoice[];

}
