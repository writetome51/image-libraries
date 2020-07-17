import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulUpdateOfEmailOrPasswordService }
	from '../run-tasks-needed-after-successful-update-of-email-or-password.service';
import { SetResultMessage }
	from '../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-result/update/set-result-message/set-result-message.decorator';


@SetResultMessage('Email updated')

export class __RunTasksNeededAfterSuccessfulUpdateOfEmailService
	extends RunTasksNeededAfterSuccessfulUpdateOfEmailOrPasswordService {
}


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulUpdateOfEmailService
	extends __RunTasksNeededAfterSuccessfulUpdateOfEmailService {
}
