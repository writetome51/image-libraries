import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { AppNavigatorModuleRoutesData } from './app-navigator-module-routes.data';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	moduleRoutes = AppNavigatorModuleRoutesData;


	get updateUserIsActive(): boolean {
		return this.__currentRoute.isActive(this.moduleRoutes.UpdateUserModule);
	}


	constructor(private __currentRoute: CurrentRouteService) {
	}

}
