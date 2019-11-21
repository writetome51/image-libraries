import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { UserResultProcessorService } from './user-result-processor.service';
import { AlertService as alert } from '../alert.service';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordResultProcessorService implements ResultProcessor {

	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __router: Router
	) {
	}


	async process(result: DBUser) {
		this.__userResultProcessor.process(result);

		if (result.sessionID) alert.success = 'Password changed.';
	}

}
