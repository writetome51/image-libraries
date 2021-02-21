import { Component } from '@angular/core';
import { Link } from '@interfaces/has-label/link/link.interface';
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

}
