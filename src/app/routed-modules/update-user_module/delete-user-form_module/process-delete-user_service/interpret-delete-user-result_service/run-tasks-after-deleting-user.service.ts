import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { AlertService as alert } from '@services/alert.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserService implements IDoThis {

	async go() {
		alert.setSuccess('Account deleted');
	}

}
