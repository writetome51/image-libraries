import { Component } from '@angular/core';
import { CurrentUserService as currentUser } from '../services/user/current-user.service';
import { QuestionStatusService as questionStatus } from './question-status.service';


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

}
