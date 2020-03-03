import { Component } from '@angular/core';
import { CurrentUserData as currentUser } from '../data/runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionStatusData as questionStatus }
	from '../data/runtime-state-data/security-question-status.data';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'security-question',
	templateUrl: './security-question.component.html'
})
export class SecurityQuestionComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	heading = 'Security Question';


	get question() {
		return currentUser.question;
	}


	get haveReceivedQuestion() {
		return questionStatus.received;
	}

}
