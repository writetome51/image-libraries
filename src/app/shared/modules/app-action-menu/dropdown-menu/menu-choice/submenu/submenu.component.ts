import { Component, Input } from '@angular/core';
import { MenuChoiceData } from '@interfaces/menu-choice-data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';


@Component({
	selector: 'submenu',
	templateUrl: './submenu.component.html',
	styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

	@Input() clicked = false;
	@Input() label: string;
	@Input() data: MenuChoiceData;


	get choices(): AppActionMenuChoice[] {
		return this.data.choice['choices'];
	}

}
