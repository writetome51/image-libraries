import { Component } from '@angular/core';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent {

	buttonText = 'Action';
	choices: string[] = [];
	hovered = false;


	constructor() {
	}


}
