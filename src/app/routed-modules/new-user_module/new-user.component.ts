import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { newUserPasswordQuestionWarning } from '@string-constants/warnings';
import { Title } from '@angular/platform-browser';
import { CurrentUserFormInputsData } from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'new-user',
	template: `
		<header><h2>{{heading}}</h2></header>
		<p class="warning-text">{{warning}}</p>

		<new-user-form clearAlertsOnDestroy
			resetToDefaultOnInit [data]="[currentUserFormInputs]"
		></new-user-form>
	`
})
export class NewUserComponent {

	heading = 'Create Account';
	warning = newUserPasswordQuestionWarning;
	currentUserFormInputs = CurrentUserFormInputsData


	constructor(title: Title) {
		title.setTitle(getPageTitle.go([this.heading]));
	}

}
