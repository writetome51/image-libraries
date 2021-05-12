import { Component } from '@angular/core';
import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'security-question',
	template: `
		<header><h2>{{heading}}</h2></header>

		<p *ngIf="receivedQuestion">{{question}}</p>

		<div class="form-container">
			<form clearFormOnInit clearAlertsOnDestroy>

				<get-security-question-form *ngIf="!(receivedQuestion)">
				</get-security-question-form>

				<answer-security-question-form *ngIf="receivedQuestion">
				</answer-security-question-form>

			</form>
		</div>
	`
})
export class SecurityQuestionComponent {

	heading = 'Security Question';


	get question() {
		return currentUserForm.question;
	}


	get receivedQuestion() {
		return questionStatus.received;
	}


	constructor(title: Title) {
		title.setTitle(getPageTitle.go(['Security Question']));
	}

}
