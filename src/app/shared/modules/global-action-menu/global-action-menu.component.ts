import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { Component } from '@angular/core';


@Component({
	selector: 'global-action-menu',
	template: `<action-menu [choicesManager]="choicesManager"></action-menu>`
})
export class GlobalActionMenuComponent {

	constructor(public choicesManager: GlobalActionMenuChoicesManagerService) {
	}

}
