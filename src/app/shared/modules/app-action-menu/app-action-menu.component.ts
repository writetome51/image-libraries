import { Component } from '@angular/core';
import { Submenu } from '../../../../interfaces/submenu';
import { ActionMenuChoicesData as actionMenuChoices }	// tslint:disable-next-line:max-line-length
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/action-menu-choices.data';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent {

	readonly label = 'Action';
	readonly choices: Array<string | Submenu> = actionMenuChoices.data;

}
