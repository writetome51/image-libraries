import { Injectable } from '@angular/core';
import { LogoutResultProcessorService } from './logout-result-processor.service';
import { AlertService as alert } from '../../../alert.service';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class DeleteUserResultProcessorService implements DirectProcessor {

	constructor(
		private __logoutResultProcessor: LogoutResultProcessorService
	) {
	}


	async process(result) {
		await this.__logoutResultProcessor.process(result);

		alert.success = 'Account deleted';
	}

}
