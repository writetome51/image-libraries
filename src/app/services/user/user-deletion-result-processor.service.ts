import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { UserLogoutResultProcessorService }
	from './user-logout-result-processor.service';
import { AlertService } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultProcessorService implements ResultProcessor {

	constructor(
		private __userLogoutResultProcessor: UserLogoutResultProcessorService,
		private __alert: AlertService
	) {
	}


	async process(result) {
		await this.__userLogoutResultProcessor.process(result);
		if (result.success) {
			this.__alert.success = 'Account successfully deleted';
		}
	}

}
