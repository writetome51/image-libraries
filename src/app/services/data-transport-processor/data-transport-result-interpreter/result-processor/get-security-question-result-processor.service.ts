import { Injectable } from '@angular/core';
import { CurrentUserData as currentUser } from '../../../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../../../data-structures/runtime-state-data/security-question-status.data';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultProcessorService implements DirectProcessor {

	async process(result: { question: string, answer: string }) {

		currentUser.question = result.question;
		questionStatus.received = true;
	}

}
