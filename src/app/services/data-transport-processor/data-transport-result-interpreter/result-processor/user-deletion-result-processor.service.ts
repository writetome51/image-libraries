import { Injectable } from '@angular/core';
import { UserLogoutResultProcessorService } from './user-logout-result-processor.service';
import { AlertService as alert } from '../../../alert.service';
import { DirectProcessor } from '../../../../interfaces/direct-processor';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultProcessorService implements DirectProcessor {

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
