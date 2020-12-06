import { AppNavigatorChoiceData } from './app-navigator-choice.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	choices = Object.values(AppNavigatorChoiceData);


	constructor(private __currentRoute: CurrentRouteService) {
	}


	isActive(route): boolean {
		return this.__currentRoute.isActive(route);
	}

}
