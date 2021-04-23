import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RunTasksAfterLogoutService } from '@run-post-success-tasks/run-tasks-after-logout.service';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserRecordService implements IDoThis {

	constructor(private __runTasksAfterLogout: RunTasksAfterLogoutService) {}


	async go() {
		await this.__runTasksAfterLogout.go();
	}

}
