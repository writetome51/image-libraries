import { Component } from '@angular/core';
import { Submenu } from './submenu';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent {

	label = 'Action';
	choices: Array<string | Submenu> = ['choice1'];

}
