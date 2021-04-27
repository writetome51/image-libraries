import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';
import { RemoveCachedDataService }
	from '@services/remove-cached-data_service/remove-cached-data.service';
import { AlertService as alert } from '@services/alert.service';
import { userRecordDeleted } from '@string-constants/alert-success-messages';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserRecordService implements IDoThis {

	constructor(private __removeCachedData: RemoveCachedDataService) {}


	async go() {
		this.__removeCachedData.go();
		alert.setSuccess(userRecordDeleted);
	}

}
