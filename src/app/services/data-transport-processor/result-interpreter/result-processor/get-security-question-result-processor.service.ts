import { Injectable } from '@angular/core';
import { CurrentUserService as currentUser} from '../../../user/current-user.service';
import { DirectProcessor } from '../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultProcessorService implements DirectProcessor {

	async process(result: { question: string, answer: string }) {
		currentUser.question = result.question;
	}

}
