import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from './update-user-services.module';
import { RunTasksAfterGettingUserService }
	from '@data-transport-processor/../../shared/services/processor/interpret-data-transport-result/run-post-success-tasks/run-tasks-after-getting-user.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterUpdatingUserService implements IDoThis {

	resultMessage: string;


	constructor(private __runTasksAfterGettingUser: RunTasksAfterGettingUserService) {
	}


	go(result: DBUser) {
		this.__runTasksAfterGettingUser.go(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.success = this.resultMessage;
	}

}
