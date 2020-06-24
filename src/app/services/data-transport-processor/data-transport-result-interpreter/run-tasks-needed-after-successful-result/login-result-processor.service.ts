import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '../../../redirect-to-logged-in-home.service';
import { UserResultProcessorService } from './user-result-processor.service';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../../../data-structures/runtime-state-data/security-question-status.data';


@Injectable({providedIn: 'root'})

export class LoginResultProcessorService implements DirectProcessor {

	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async process(result: DBUser) {
		questionStatus.received = false;
		this.__userResultProcessor.process(result);

		await this.__redirectToLoggedInHome.go();
	}

}
