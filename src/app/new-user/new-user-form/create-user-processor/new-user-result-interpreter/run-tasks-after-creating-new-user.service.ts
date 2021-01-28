import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterCreatingNewUserService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {
	}


	async go(result: DBUser) {
		await this.__runTasksAfterLogin.go(result);
		if (result.sessionID) alert.success = 'User created';
	}

}
