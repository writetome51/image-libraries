import { Component } from '@angular/core';
import { appName } from '@string-constants/app-name';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { isString } from '@writetome51/is-string-not-string';


@Component({
	selector: 'app-header',
	template: `
		<header id="site-header">
			<h1>
				<a routerLink="/" title="home page">{{ siteHeading }}</a>
			</h1>

			<logged-in-navigator *ngIf="loggedIn"></logged-in-navigator>
		</header>
	`
})
export class AppHeaderComponent {

	siteHeading = appName;


	get loggedIn(): boolean {
		const sessionID = this.__sessionIDInBrowser.get();
		return (isString(sessionID) && sessionID.length > 0);
	}


	constructor(private __sessionIDInBrowser: SessionIDInBrowserStorageService) {}

}
