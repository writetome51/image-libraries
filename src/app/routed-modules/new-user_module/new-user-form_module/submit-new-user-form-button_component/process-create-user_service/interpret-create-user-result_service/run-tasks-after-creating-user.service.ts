import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserFormServicesModule } from '../../../new-user-form-services.module';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';
import { UserRecord } from '@interfaces/user-record.interface';


@Injectable({providedIn: NewUserFormServicesModule})
export class RunTasksAfterCreatingUserService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {}


	async go(result: UserRecord) {
		await this.__runTasksAfterLogin.go(result);

		alerts.setSuccess('Account created.  You\'re signed in.');
	}

}
