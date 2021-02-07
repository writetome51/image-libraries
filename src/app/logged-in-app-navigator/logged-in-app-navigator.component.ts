import { AssureUserDataLoadedService } from './assure-user-data-loaded.service';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { Link } from '@interfaces/has-label/link/link.interface';
import { NavigatorChoiceData } from './navigator-choice.data';


@Component({
	selector: 'logged-in-app-navigator',
	templateUrl: './logged-in-app-navigator.component.html'
})
export class LoggedInAppNavigatorComponent {

	choices: Link[] = Object.values(NavigatorChoiceData);


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
