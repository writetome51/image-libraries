import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingUserService }
	from '../../run-tasks-after-updating-user.service';
import { SetResultMessage } from '../../set-result-message/set-result-message.decorator';


@SetResultMessage('Email updated')
export class __RunTasksAfterUpdatingEmailService
	extends RunTasksAfterUpdatingUserService {
}

@Injectable({providedIn: 'root'})
export class RunTasksAfterUpdatingEmailService extends
	__RunTasksAfterUpdatingEmailService {
}
