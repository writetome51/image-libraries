import { AlertService as alert } from '@services/alert.service';
import { DBUser } from '@interfaces/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserInDbService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {}


	async go(result: DBUser) {
		await this.__runTasksAfterLogin.go(result);
		alert.setSuccess('Account created.  You\'re signed in.');
	}

}
