import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DBUser } from '@interfaces/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { RunTasksAfterLoginService }
	from '@process/run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingNewUserService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {
	}


	async go(result: DBUser) {
		await this.__runTasksAfterLogin.go(result);
		alert.success = 'Account created.  You\'re signed in.';
	}

}
