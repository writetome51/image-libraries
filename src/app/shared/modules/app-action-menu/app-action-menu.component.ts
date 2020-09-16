import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Component } from '@angular/core';
import { Submenu } from '@interfaces/submenu';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent {

	readonly label = 'Action';
	readonly choices: Array<string | Submenu> = actionMenuChoices.data;
	hovered = false;
	open = false;


	toggleOpen(): void {
		this.open = !(this.open);
	}


	hover(): void {
		this.hovered = true;
	}


	unHover(): void {
		this.hovered = false;
		this.open = false;
	}

}
