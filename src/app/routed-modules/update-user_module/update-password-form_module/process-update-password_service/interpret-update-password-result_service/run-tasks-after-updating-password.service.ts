import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingUserService } from '../../../run-tasks-after-updating-user.service';
import { SetResultMessage }
	from '../../../set-result-message_decorator/set-result-message.decorator';
import { UpdateUserServicesModule } from '../../../update-user-services.module';


@SetResultMessage('Password updated')
export class __RunTasksAfterUpdatingPasswordService extends RunTasksAfterUpdatingUserService {}

@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterUpdatingPasswordService extends __RunTasksAfterUpdatingPasswordService {}
