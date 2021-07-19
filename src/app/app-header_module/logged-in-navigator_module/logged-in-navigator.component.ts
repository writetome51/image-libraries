import { AssureUserDataLoadedService }
	from '@services/assure-user-data-loaded_service/assure-user-data-loaded.service';
import { Component } from '@angular/core';
import { Link } from '@interfaces/link.interface';
import { LoggedInNavigatorLinkData } from './logged-in-navigator-link.data';


@Component({
	selector: 'logged-in-navigator',
	template: `
		<nav>
			<div class="centered-nav-block-container">
				<logout-button></logout-button>
				<navigation-links [data]="links"></navigation-links>
			</div>
		</nav>
	`
})
export class LoggedInNavigatorComponent {

	links: Link[] = Object.values(LoggedInNavigatorLinkData);


	constructor(private __assureUserDataLoaded: AssureUserDataLoadedService) {
		this.__assureUserDataLoaded.go();
	}

}
