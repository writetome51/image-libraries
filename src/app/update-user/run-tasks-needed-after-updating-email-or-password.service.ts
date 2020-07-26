import { DBUser } from '../shared/interfaces/db-user';
import { RunTasksNeededAfterGettingUserService }
	from '../shared/services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-process/run-tasks-needed-after-getting-user.service';
import { AlertData as alert } from '../shared/data/runtime-state/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { IDoThis } from '../shared/interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterUpdatingEmailOrPasswordService implements IDoThis {

	resultMessage: string;


	constructor(private __runTasksNeededAfterGettingUser: RunTasksNeededAfterGettingUserService) {
	}


	async go(result: DBUser) {
		this.__runTasksNeededAfterGettingUser.go(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.success = this.resultMessage;
	}

}
