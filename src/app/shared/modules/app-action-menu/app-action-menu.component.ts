import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { Component } from '@angular/core';
import { ActionMenuComponent } from '@abstract-components/action-menu.component';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent extends ActionMenuComponent {

	choices = actionMenuChoices.global;


	constructor(_choicesManager: AppActionMenuChoicesManagerService) {
		super(_choicesManager);
	}

}
