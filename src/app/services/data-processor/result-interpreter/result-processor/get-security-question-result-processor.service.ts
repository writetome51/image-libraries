import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../../interfaces/result-processor';
import { CurrentUserService as currentUser} from '../../../user/current-user.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultProcessorService implements ResultProcessor {

	async process(result: { question: string, answer: string }) {
		currentUser.question = result.question;
	}

}
