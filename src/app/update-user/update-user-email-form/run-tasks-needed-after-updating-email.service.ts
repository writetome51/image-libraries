import { Injectable } from '@angular/core';
import { RunTasksNeededAfterUpdatingEmailOrPasswordService }
	from '../run-tasks-needed-after-updating-email-or-password.service';
import { SetResultMessage }
	from '../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-process/set-result-message/set-result-message.decorator';


@SetResultMessage('Email updated')

export class __RunTasksNeededAfterUpdatingEmailService
	extends RunTasksNeededAfterUpdatingEmailOrPasswordService {
}

@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterUpdatingEmailService extends __RunTasksNeededAfterUpdatingEmailService {
}
