import { Injectable } from '@angular/core';
import { RunTasksNeededAfterLogoutService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-process/run-tasks-needed-after-logout.service';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterDeletionOfUserService implements IDoThis {

	constructor(
		private __runTasksNeededAfterLogout: RunTasksNeededAfterLogoutService
	) {
	}


	async go(result) {
		await this.__runTasksNeededAfterLogout.go();

		alert.success = 'Account deleted';
	}

}
