import { Component, Input } from '@angular/core';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';


@Component({
	selector: 'dropdown-menu',
	templateUrl: './dropdown-menu.component.html',
	styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {

	@Input() choices: AppActionMenuChoice[];
	@Input() open = false;
	@Input() image: any;

	constructor() {
	}

}
