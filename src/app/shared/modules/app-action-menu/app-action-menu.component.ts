import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Component, Input } from '@angular/core';
import { Submenu } from '@interfaces/submenu';
import { environment } from '@environments/environment';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent {

	@Input() singleImageMode = false;
	readonly sprocket = {
		src: environment.assets + 'sprocket-wheel.png',
		width: 11,
		height: 11,
		alt: 'action menu'
	};
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
