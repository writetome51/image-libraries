import { AlertService as alert } from '@services/alert.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserFileFolderService implements IDoThis {

	constructor(private __runTasksAfterLogin: RunTasksAfterLoginService) {}


	async go(result: {success: true}) {
		alert.setSuccess('Account created.  You\'re signed in.');
	}

}
