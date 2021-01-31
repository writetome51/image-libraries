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


	constructor(private __currentRoute: CurrentRouteService) {
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
