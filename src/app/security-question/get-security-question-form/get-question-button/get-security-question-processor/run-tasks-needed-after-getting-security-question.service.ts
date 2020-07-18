import { Injectable } from '@angular/core';
import { CurrentUserData as currentUser }
	from '../../../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../../../data-structures/runtime-state-data/security-question-status.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingSecurityQuestionService implements IDoThis {

	async go(result: { question: string, answer: string }) {

		currentUser.question = result.question;
		questionStatus.received = true;
	}

}
