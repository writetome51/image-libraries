import { appName } from '@string-constants/app-name';
import { Component } from '@angular/core';
import { isString } from '@writetome51/is-string-not-string';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';


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
		const sessionID = this.__sessionIDInBrowser.get();
		return (isString(sessionID) && sessionID.length > 8);
	}


	constructor(private __sessionIDInBrowser: SessionIDInBrowserStorageService) {}

}
