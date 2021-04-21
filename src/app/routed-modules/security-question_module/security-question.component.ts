import { Component } from '@angular/core';
import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { SecurityQuestionModuleTitleData as moduleTitle }
	from './security-question-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'security-question',
	template: `
		<header><h2>{{heading}}</h2></header>

		<p *ngIf="receivedQuestion">{{question}}</p>

		<div class="form-container">
			<form clearFormOnInit clearAlertOnDestroy>

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


	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}

}
