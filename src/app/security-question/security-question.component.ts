import { Component } from '@angular/core';
import { CurrentUserService as currentUser } from '../services/user/current-user.service';
import { QuestionStatusService as questionStatus } from '../services/question-status.service';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'security-question',
	templateUrl: './security-question.component.html'
})
export class SecurityQuestionComponent  extends ClearFormOnInitAndAlertOnDestroyComponent {

	heading = 'Security Question';


	get question() {
		return currentUser.question;
	}


	get haveReceivedQuestion() {
		return questionStatus.received;
	}

}
