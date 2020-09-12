import { DBUser } from '@interfaces/db-user';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService } // tslint:disable-next-line:max-line-length
	from '@run-post-success-tasks/run-tasks-after-login.service';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterCreatingNewUserService implements IDoThis {

	constructor(private __runTasksNeededAfterLogin: RunTasksAfterLoginService) {
	}


	async go(result: DBUser) {
		await this.__runTasksNeededAfterLogin.go(result);
		if (result.sessionID) alert.success = 'User created';
	}

}
