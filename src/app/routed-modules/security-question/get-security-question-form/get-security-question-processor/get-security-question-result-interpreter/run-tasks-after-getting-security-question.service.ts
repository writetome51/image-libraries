import { Injectable } from '@angular/core';
import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingSecurityQuestionService implements IDoThis {

	async go(result: { question: string, answer: string }) {

		currentUser.question = result.question;
		questionStatus.received = true;
	}

}
