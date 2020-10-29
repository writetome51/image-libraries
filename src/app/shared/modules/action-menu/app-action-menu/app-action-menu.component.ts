import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { Component } from '@angular/core';
import { ActionMenuComponent } from '../action-menu.component';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent extends ActionMenuComponent {

	constructor(_choicesManager: AppActionMenuChoicesManagerService) {
		super(_choicesManager);
	}

}
