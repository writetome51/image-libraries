import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { Title } from '@angular/platform-browser';
import { newUserPasswordQuestionWarning } from '@string-constants/warnings';


@Component({
	selector: 'new-user',
	template: `
		<header><h2>{{heading}}</h2></header>
		<p class="warning-text">{{warning}}</p>

		<new-user-form clearFormOnInit clearAlertsOnDestroy></new-user-form>
	`
})
export class NewUserComponent {

	heading = 'Create Account';
	warning = newUserPasswordQuestionWarning;


	constructor(title: Title) {
		title.setTitle(getPageTitle.go(['Create Account']));
	}

}
