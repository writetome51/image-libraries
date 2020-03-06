import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { AppModuleRouteService } from '../app-module-route.service';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	moduleRoute = AppModuleRouteService;


	get updateUserIsActive(): boolean {
		return this.__currentRoute.isActive(this.moduleRoute.UpdateUserModule);
	}


	constructor(private __currentRoute: CurrentRouteService) {
	}

}
