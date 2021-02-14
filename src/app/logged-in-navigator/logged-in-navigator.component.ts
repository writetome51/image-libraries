import { AssureUserDataLoadedService } from './assure-user-data-loaded/assure-user-data-loaded.service';
import { Component } from '@angular/core';


@Component({
	selector: 'logged-in-navigator',
	template: `
		<nav>
			<div class="centered-nav-block-container">
				<logout-button></logout-button>
				<navigator-links></navigator-links>
			</div>
		</nav>
	`
})
export class LoggedInNavigatorComponent {

	constructor(private __assureUserDataLoaded: AssureUserDataLoadedService) {
		this.__assureUserDataLoaded.go();
	}

}
