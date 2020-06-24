import { Injectable } from '@angular/core';
import { LogoutResultProcessorService } from './logout-result-processor.service';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulDeletionOfUserService implements IDoThis {

	constructor(
		private __logoutResultProcessor: LogoutResultProcessorService
	) {
	}


	async go(result) {
		await this.__logoutResultProcessor.process(result);

		alert.success = 'Account deleted';
	}

}
