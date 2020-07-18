import { Injectable } from '@angular/core';
import { RunTasksNeededAfterUpdateOfEmailOrPasswordService }
	from '../../run-tasks-needed-after-update-of-email-or-password.service';
import { SetResultMessage }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-process/set-result-message/set-result-message.decorator';


@SetResultMessage('Password updated')

export class __RunTasksNeededAfterUpdateOfPasswordService
	extends RunTasksNeededAfterUpdateOfEmailOrPasswordService {
}


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterUpdateOfPasswordService
	extends __RunTasksNeededAfterUpdateOfPasswordService {
}
