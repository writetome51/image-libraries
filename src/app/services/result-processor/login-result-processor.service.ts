import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserResultProcessorService } from './user-result-processor.service';
import { ResultProcessor } from '../../../interfaces/result-processor';


@Injectable({
	providedIn: 'root'
})
export class LoginResultProcessorService implements ResultProcessor {

	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __router: Router
	) {
	}


	process(result: DBUser): void {
		this.__userResultProcessor.process(result);
		if (result.sessionID) {
			this.__router.navigate(['/libraries']); // logged-in home page.
		}
	}

}
