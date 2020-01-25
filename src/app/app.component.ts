import { AppModuleRouteService } from './app-module-route.service';
import { AlertData } from './data/alert.data';
import { Component, HostListener } from '@angular/core';
import { LocalSessionIDService } from './services/local-data/local-session-id.service';
import { CurrentRouteService } from './services/current-route.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Libraries';
	alert = AlertData;
	moduleRoute = AppModuleRouteService;


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// logging event to console to see its contents:
		// console.log(event);
	}


	get sessionIDExists() {
		return (this.__localSessionID.get());
	}


	get updateUserIsActive(): boolean {
		return this.__currentRoute.isActive(this.moduleRoute.UpdateUserModule);
	}


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __currentRoute: CurrentRouteService
	) {
	}

}
