import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingUserService }
	from '../../run-tasks-after-updating-user.service';
import { SetResultMessage } from '../../set-result-message/set-result-message.decorator';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@SetResultMessage('Password updated')
export class __RunTasksAfterUpdatingPasswordService extends RunTasksAfterUpdatingUserService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterUpdatingPasswordService extends __RunTasksAfterUpdatingPasswordService {
}
