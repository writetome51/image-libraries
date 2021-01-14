import { DBUser } from '@interfaces/db-user';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { RunTasksAfterGettingUserService }
	from '@services/processor/data-transport-processor/data-transport-process-result-interpreter/run-post-success-tasks/run-tasks-after-getting-user.service';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterLoginService implements IDoThis {

	constructor(
		private __runTasksAfterGettingUser: RunTasksAfterGettingUserService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async go(result: DBUser) {
		questionStatus.received = false;
		this.__runTasksAfterGettingUser.go(result);

		await this.__redirectToLoggedInHome.go();
	}

}
