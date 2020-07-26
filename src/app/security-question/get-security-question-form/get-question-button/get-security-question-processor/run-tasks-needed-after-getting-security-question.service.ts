import { Injectable } from '@angular/core';
import { CurrentUserData as currentUser }
	from '../../../../shared/data/runtime-state/static-classes/current-user.data';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../../shared/data/runtime-state/security-question-status.data';
import { IDoThis } from '../../../../shared/interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingSecurityQuestionService implements IDoThis {

	async go(result: { question: string, answer: string }) {

		currentUser.question = result.question;
		questionStatus.received = true;
	}

}
