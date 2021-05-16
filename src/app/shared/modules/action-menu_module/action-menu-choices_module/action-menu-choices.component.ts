import { Component } from '@angular/core';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


@Component({
	selector: 'action-menu-choices',
	template: `
		<ul class="dropdown-menu action-menu">
			<menu-choice *ngFor="let choice of data" [data]="choice"></menu-choice>
		</ul>
	`,
	styleUrls: ['./action-menu-choices.component.css']
})
export class ActionMenuChoicesComponent extends HasDataInputComponent<MenuChoice[]> {}
