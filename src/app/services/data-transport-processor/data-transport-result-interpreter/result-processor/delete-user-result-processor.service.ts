import { Injectable } from '@angular/core';
import { LogoutResultProcessorService } from './logout-result-processor.service';
import { AlertData as alert } from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
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
