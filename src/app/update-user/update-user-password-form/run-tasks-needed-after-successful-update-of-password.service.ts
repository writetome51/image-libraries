import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulUpdateOfEmailOrPasswordService }
	from '../run-tasks-needed-after-successful-update-of-email-or-password.service';
import { SetResultMessage }
	from '../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-result/set-result-message/set-result-message.decorator';


@SetResultMessage('Password updated')

export class __RunTasksNeededAfterSuccessfulUpdateOfPasswordService
	extends RunTasksNeededAfterSuccessfulUpdateOfEmailOrPasswordService {
}


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulUpdateOfPasswordService
	extends __RunTasksNeededAfterSuccessfulUpdateOfPasswordService {
}
