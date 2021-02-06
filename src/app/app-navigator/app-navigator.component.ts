import { AssureUserDataLoadedService } from './assure-user-data-loaded.service';
import { AppNavigatorChoiceData } from './app-navigator-choice.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { Link } from '@interfaces/has-label/link/link.interface';


@Component({
	selector: 'app-navigator',
	templateUrl: './app-navigator.component.html'
})
export class AppNavigatorComponent {

	choices: Link[] = Object.values(AppNavigatorChoiceData);


	constructor(
		private __currentRoute: CurrentRouteService,
		private __assureUserDataLoaded: AssureUserDataLoadedService
	) {
		this.__assureUserDataLoaded.go();
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
