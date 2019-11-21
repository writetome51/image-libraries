import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { UserLogoutResultProcessorService } from './user-logout-result-processor.service';
import { AlertService as alert } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultProcessorService implements ResultProcessor {

	constructor(
		private __userLogoutResultProcessor: UserLogoutResultProcessorService
	) {
	}


	async process(result) {
		await this.__userLogoutResultProcessor.process(result);
		if (result.success) {
			alert.success = 'Account deleted';
		}
	}

}
