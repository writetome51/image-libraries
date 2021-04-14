import { AlertService as alert } from '@services/alert.service';
import { UserRecord } from '@interfaces/user-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from './update-user-services.module';
import { RunTasksAfterGettingUserService }
	from '@run-post-success-tasks/run-tasks-after-getting-user.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterUpdatingUserService implements IDoThis {

	resultMessage: string;


	constructor(private __runTasksAfterGettingUser: RunTasksAfterGettingUserService) {}


	go(result: UserRecord) {
		this.__runTasksAfterGettingUser.go(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.setSuccess(this.resultMessage);
	}

}
