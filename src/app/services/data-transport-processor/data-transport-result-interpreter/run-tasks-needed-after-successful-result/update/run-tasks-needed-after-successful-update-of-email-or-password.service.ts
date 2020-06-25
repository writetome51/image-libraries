import { DBUser } from '../../../../../../interfaces/db-user';
import { RunTasksNeededAfterSuccessfulGettingUserService }
	from '../get/run-tasks-needed-after-successful-getting-user.service';
import { AlertData as alert }
	from '../../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulUpdateOfEmailOrPasswordService implements IDoThis {

	resultMessage: string;


	constructor(
		private __runTasksNeededAfterSuccessfulRetrievalOfUser:
			RunTasksNeededAfterSuccessfulGettingUserService
	) {
	}


	async go(result: DBUser) {
		this.__runTasksNeededAfterSuccessfulRetrievalOfUser.go(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.success = this.resultMessage;
	}

}
