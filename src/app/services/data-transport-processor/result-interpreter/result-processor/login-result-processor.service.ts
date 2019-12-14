import { AlertService as alert } from '../../../alert.service';
import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../../interfaces/result-processor';
import { RedirectToLoggedInHomeService } from '../../../redirect-to-logged-in-home.service';
import { UserResultProcessorService } from './user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultProcessorService implements ResultProcessor {

	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async process(result: DBUser) {
		if (result.sessionID) {
			this.__userResultProcessor.process(result);

			await this.__redirectToLoggedInHome.go();
		}
		else alert.error = 'An unexpected error occurred.';
	}

}
