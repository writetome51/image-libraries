import { DBUser } from '../../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '../../../../redirect-to-logged-in-home.service';
import { RunTasksNeededAfterSuccessfulGettingUserService }
	from '../get/run-tasks-needed-after-successful-getting-user.service';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../../../../data-structures/runtime-state-data/security-question-status.data';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulLoginService implements IDoThis {

	constructor(
		private __runTasksNeededAfterSuccessfulGettingUser:
			RunTasksNeededAfterSuccessfulGettingUserService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async go(result: DBUser) {
		questionStatus.received = false;
		this.__runTasksNeededAfterSuccessfulGettingUser.go(result);

		await this.__redirectToLoggedInHome.go();
	}

}
