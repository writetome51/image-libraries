import { Component, Input } from '@angular/core';
import { ActionMenuChoiceData } from '@interfaces/action-menu-choice-data';
import { ActionMenuChoice } from '@interfaces/action-menu-choice';


@Component({
	selector: 'submenu',
	templateUrl: './submenu.component.html',
	styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

	@Input() clicked = false;
	@Input() label: string;
	@Input() data: ActionMenuChoiceData;


	get choices(): ActionMenuChoice[] {
		return this.data.choice['choices'];
	}

}
