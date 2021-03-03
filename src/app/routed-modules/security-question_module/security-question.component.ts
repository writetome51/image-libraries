import { Component } from '@angular/core';
import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { SecurityQuestionModuleTitleData as moduleTitle }
	from './security-question-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'security-question',
	templateUrl: './security-question.component.html'
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
