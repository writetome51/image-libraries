import { DBUser } from '@shared/interfaces/db-user';
import { IDoThis } from '@shared/interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '../../redirect-to-logged-in-home.service';
import { RunTasksNeededAfterGettingUserService }
	from './run-tasks-needed-after-successful-process/run-tasks-needed-after-getting-user.service';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterLoginService implements IDoThis {

	constructor(
		private __runTasksNeededAfterGettingUser: RunTasksNeededAfterGettingUserService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async go(result: DBUser) {
		questionStatus.received = false;
		this.__runTasksNeededAfterGettingUser.go(result);

		await this.__redirectToLoggedInHome.go();
	}

}
