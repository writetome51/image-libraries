import { Injectable } from '@angular/core';
import { RunTasksNeededAfterUpdatingEmailOrPasswordService }
	from '../../run-tasks-needed-after-updating-email-or-password.service';
import { SetResultMessage } from '../../set-result-message/set-result-message.decorator';


@SetResultMessage('Password updated')

export class __RunTasksNeededAfterUpdatingPasswordService
	extends RunTasksNeededAfterUpdatingEmailOrPasswordService {
}

@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterUpdatingPasswordService
	extends __RunTasksNeededAfterUpdatingPasswordService {
}
