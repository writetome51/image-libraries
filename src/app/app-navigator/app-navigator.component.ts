import { AppNavigatorModuleRoutesData } from './app-navigator-module-routes.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { not } from '@writetome51/not';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	moduleRoutes = AppNavigatorModuleRoutesData;


	constructor(private __currentRoute: CurrentRouteService) {
	}


	updateUserNotActive(): boolean {
		return not(this.__currentRoute.isActive(this.moduleRoutes.UpdateUserModule));
	}


	addImagesNotActive(): boolean {
		return not(this.__currentRoute.isActive(this.moduleRoutes.AddImagesModule));
	}


	allImagesNotActive(): boolean {
		return not(this.__currentRoute.isActive(this.moduleRoutes.AllImagesModule));
	}

}
