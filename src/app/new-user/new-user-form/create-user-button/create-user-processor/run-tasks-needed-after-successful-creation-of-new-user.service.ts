import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulLoginService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-result/authentication/run-tasks-needed-after-successful-login.service';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulCreationOfNewUserService implements IDoThis {

	constructor(
		private __runTasksNeededAfterSuccessfulLogin: RunTasksNeededAfterSuccessfulLoginService
	) {
	}


	async go(result: DBUser) {
		await this.__runTasksNeededAfterSuccessfulLogin.go(result);
		if (result.sessionID) alert.success = 'User created';
	}

}
