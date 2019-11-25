import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserResultProcessorService } from './user-result-processor.service';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { AlertService as alert } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultProcessorService implements ResultProcessor {

	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __router: Router
	) {
	}


	async process(result: DBUser) {
		if (result.sessionID) {
			this.__userResultProcessor.process(result);

			await this.__router.navigate(['/libraries']); // logged-in home page.
		}
		else alert.error = 'An unexpected error occurred.';
	}

}
