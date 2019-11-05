import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { UserLogoutOrDeletionResultProcessorService } from './user-logout-or-deletion-result-processor.service';
import { AlertService } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultProcessorService implements ResultProcessor {

	constructor(
		private __userLogoutOrDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService,
		private __alert: AlertService
	) {
	}


	async process(result) {
		await this.__userLogoutOrDeletionResultProcessor.process(result);
		if (result.success) {
			this.__alert.success = 'Account successfully deleted';
		}
	}


}
