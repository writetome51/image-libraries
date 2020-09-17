import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailOrPasswordService }
	from '../../run-tasks-after-updating-email-or-password.service';
import { SetResultMessage } from '../../set-result-message/set-result-message.decorator';


@SetResultMessage('Password updated')

export class __RunTasksAfterUpdatingPasswordService
	extends RunTasksAfterUpdatingEmailOrPasswordService {
}

@Injectable({providedIn: 'root'})

export class RunTasksAfterUpdatingPasswordService
	extends __RunTasksAfterUpdatingPasswordService {
}
