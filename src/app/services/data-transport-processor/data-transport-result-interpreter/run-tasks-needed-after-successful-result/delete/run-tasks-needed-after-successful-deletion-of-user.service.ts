import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulLogoutService }
	from '../authentication/run-tasks-needed-after-successful-logout.service';
import { AlertData as alert }
	from '../../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulDeletionOfUserService implements IDoThis {

	constructor(
		private __runTasksNeededAfterSuccessfulLogout: RunTasksNeededAfterSuccessfulLogoutService
	) {
	}


	async go(result) {
		await this.__runTasksNeededAfterSuccessfulLogout.go();

		alert.success = 'Account deleted';
	}

}
