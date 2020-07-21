import { Component } from '@angular/core';
import { Submenu } from '../../interfaces/submenu';
import { ActionMenuChoicesData as actionMenuChoices }
	from '../../data-structures/runtime-state-data/static-classes/action-menu-choices.data';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent {

	label = 'Action';
	choices: Array<string | Submenu> = actionMenuChoices.data;

}
