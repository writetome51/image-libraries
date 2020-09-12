import { Injectable } from '@angular/core';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterDeletionOfUserService implements IDoThis {

	constructor(
		private __runTasksNeededAfterLogout: RunTasksAfterLogoutService
	) {
	}


	async go(result) {
		await this.__runTasksNeededAfterLogout.go();

		alert.success = 'Account deleted';
	}

}
