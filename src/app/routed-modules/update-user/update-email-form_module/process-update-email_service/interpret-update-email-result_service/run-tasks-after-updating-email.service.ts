import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingUserService }
	from '../../../run-tasks-after-updating-user.service';
import { SetResultMessage } from '../../../set-result-message_decorator/set-result-message.decorator';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@SetResultMessage('Email updated')
export class __RunTasksAfterUpdatingEmailService extends RunTasksAfterUpdatingUserService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterUpdatingEmailService extends __RunTasksAfterUpdatingEmailService {
}
