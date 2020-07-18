import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '../../redirect-to-logged-in-home.service';
import { RunTasksNeededAfterGettingUserService }
	from './run-tasks-needed-after-successful-process/run-tasks-needed-after-getting-user.service';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../../data-structures/runtime-state-data/security-question-status.data';
import { IDoThis } from '../../../../interfaces/i-do-this';


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
