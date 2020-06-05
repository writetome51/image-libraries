import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { AppNavigatorModuleRouteService } from './app-navigator-module-route.service';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	moduleRoute = AppNavigatorModuleRouteService;


	get updateUserIsActive(): boolean {
		return this.__currentRoute.isActive(this.moduleRoute.UpdateUserModule);
	}


	constructor(private __currentRoute: CurrentRouteService) {
	}

}
