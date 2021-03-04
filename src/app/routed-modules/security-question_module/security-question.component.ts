import { Component } from '@angular/core';
import { CurrentUserData as currentUser } from '@runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { SecurityQuestionModuleTitleData as moduleTitle } from './security-question-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'security-question',
	template: `
		<header><h2>{{heading}}</h2></header>

		<p *ngIf="haveReceivedQuestion">{{question}}</p>

		<div class="form-container">

			<form clearFormOnInit clearAlertOnDestroy>

				<get-security-question-form *ngIf="!(haveReceivedQuestion)"></get-security-question-form>

				<answer-security-question-form *ngIf="haveReceivedQuestion">
				</answer-security-question-form>

			</form>

		</div>
	`
})
export class SecurityQuestionComponent {

	heading = 'Security Question';


	get question() {
		return currentUser.question;
	}


	get haveReceivedQuestion() {
		return questionStatus.received;
	}

	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}

}
