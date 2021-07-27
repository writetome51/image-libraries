import { Component } from '@angular/core';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { SecurityQuestionStatusData }
	from '@runtime-state-data/security-question-status.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'security-question',
	template: `
		<header><h2>{{heading}}</h2></header>

		<p *ngIf="questionStatus.received">{{question}}</p>

		<security-question-forms [receivedQuestion]="questionStatus.received">
		</security-question-forms>
	`
})
export class SecurityQuestionComponent {

	heading = 'Security Question';
	currentUserFormInputs = CurrentUserFormInputsData;
	questionStatus = SecurityQuestionStatusData;

	get question() {
		return this.currentUserFormInputs.question;
	}


	constructor(title: Title) {
		title.setTitle(getPageTitle.go([this.heading]));
	}

}
