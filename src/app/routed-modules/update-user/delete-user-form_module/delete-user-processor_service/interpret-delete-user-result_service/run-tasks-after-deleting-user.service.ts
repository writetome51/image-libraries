import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserService implements IDoThis {

	constructor(private __runTasksAfterLogout: RunTasksAfterLogoutService) {
	}


	async go() {
		await this.__runTasksAfterLogout.go();
		alert.success = 'Account deleted';
	}

}
