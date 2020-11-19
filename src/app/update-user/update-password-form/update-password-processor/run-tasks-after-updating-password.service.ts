import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingUserService }
	from '../../run-tasks-after-updating-user.service';
import { SetResultMessage } from '../../set-result-message/set-result-message.decorator';


@SetResultMessage('Password updated')
export class __RunTasksAfterUpdatingPasswordService
	extends RunTasksAfterUpdatingUserService {
}

@Injectable({providedIn: 'root'})
export class RunTasksAfterUpdatingPasswordService
	extends __RunTasksAfterUpdatingPasswordService {
}
