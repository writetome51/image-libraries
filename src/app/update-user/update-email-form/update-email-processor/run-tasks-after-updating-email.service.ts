import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailOrPasswordService }
	from '../../run-tasks-after-updating-email-or-password.service';
import { SetResultMessage } from '../../set-result-message/set-result-message.decorator';


@SetResultMessage('Email updated')

export class __RunTasksAfterUpdatingEmailService
	extends RunTasksAfterUpdatingEmailOrPasswordService {
}

@Injectable({providedIn: 'root'})

export class RunTasksAfterUpdatingEmailService extends
	__RunTasksAfterUpdatingEmailService {
}
