import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'new-user',
	template: `
		<header><h2>{{heading}}</h2></header>
		<p class="warning-text">Since this demo doesn't use SSL, do not use a password or security
			question that is truly secret.
		</p>
		<new-user-form clearFormOnInit clearAlertsOnDestroy></new-user-form>
	`
})
export class NewUserComponent {

	heading = 'Create Account';


	constructor(title: Title) {
		title.setTitle(getPageTitle.go(['Create Account']));
	}

}
