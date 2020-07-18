import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { RunTasksNeededAfterLoginService } // tslint:disable-next-line:max-line-length
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-login.service';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterCreatingNewUserService implements IDoThis {

	constructor(private __runTasksNeededAfterLogin: RunTasksNeededAfterLoginService) {
	}


	async go(result: DBUser) {
		await this.__runTasksNeededAfterLogin.go(result);
		if (result.sessionID) alert.success = 'User created';
	}

}
