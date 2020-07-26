import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { AppNavigatorModuleRoutesData } from './app-navigator-module-routes.data';
import { not } from '@writetome51/not';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	moduleRoutes = AppNavigatorModuleRoutesData;


	updateUserNotActive(): boolean {
		return not(this.__currentRoute.isActive(this.moduleRoutes.UpdateUserModule));
	}


	constructor(private __currentRoute: CurrentRouteService) {
	}

}
