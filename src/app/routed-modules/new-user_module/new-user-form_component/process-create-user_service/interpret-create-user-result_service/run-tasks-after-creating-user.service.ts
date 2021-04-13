import { AlertService as alert } from '@services/alert.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';
import { TemporaryUserData as temporaryUser } from '@runtime-state-data/temporary-user.data';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {}


	async go() {
		await this.__runTasksAfterLogin.go(temporaryUser.data);

		alert.setSuccess('Account created.  You\'re signed in.');
	}

}
