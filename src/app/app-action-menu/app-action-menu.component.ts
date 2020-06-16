import { Component } from '@angular/core';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html'
})
export class AppActionMenuComponent {

	buttonText = 'Action';
	choices: string[] = ['Delete Selected', 'Get Info on Selected'];
	hovered = false;


	constructor() {
	}

	toggleDropdown(){}


}
