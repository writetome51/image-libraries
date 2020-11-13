import { DBUser } from '@interfaces/db-user';
import { RunTasksAfterGettingUserService }
	from '@run-post-success-tasks/run-tasks-after-getting-user.service';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksAfterUpdatingUserService implements IDoThis {

	resultMessage: string;


	constructor(private __runTasksAfterGettingUser: RunTasksAfterGettingUserService) {
	}


	async go(result: DBUser) {
		this.__runTasksAfterGettingUser.go(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.success = this.resultMessage;
	}

}
