import { appName } from '@string-constants/app-name';
import { Component } from '@angular/core';
import { SessionIDAppearsValidService } from '@services/session-id-appears-valid.service';


@Component({
	selector: 'app-header',
	template: `
		<header id="site-header">
			<h1>
				<a routerLink="/" title="home page">{{ siteHeading }}</a>
			</h1>

			<logged-in-navigator *ngIf="assumedLoggedIn"></logged-in-navigator>
		</header>
	`
})
export class AppHeaderComponent {

	siteHeading = appName;


	get assumedLoggedIn(): boolean {
		return this.__sessionIDAppearsValid.go();
	}


	constructor(private __sessionIDAppearsValid: SessionIDAppearsValidService) {}

}
