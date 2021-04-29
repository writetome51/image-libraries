import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';
import { UserRecord } from '@interfaces/user-record.interface';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {}


	async go(result: UserRecord) {
		await this.__runTasksAfterLogin.go(result);

		alerts.setSuccess('Account created.  You\'re signed in.');
	}

}
