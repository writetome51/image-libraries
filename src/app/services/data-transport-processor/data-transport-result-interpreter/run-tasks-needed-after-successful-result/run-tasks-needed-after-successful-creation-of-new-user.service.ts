import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulLoginService } from './run-tasks-needed-after-successful-login.service';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulCreationOfNewUserService implements IDoThis {

	constructor(private __loginResultProcessor: RunTasksNeededAfterSuccessfulLoginService) {
	}


	async go(result: DBUser) {
		await this.__loginResultProcessor.process(result);
		if (result.sessionID) alert.success = 'User created';
	}

}
