import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ProcessDeleteUserRecordService }
	from './process-delete-user-record_service/process-delete-user-record.service';
import { ProcessDeleteAllUserImageFilesService }
	from './process-delete-user-image-files_service/process-delete-all-user-image-files.service';
import { userRecordDeleted } from '@string-constants/alert-success-messages';
import { UpdateUserServicesModule } from '../../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserService implements IDoThis {

	constructor(
		private __processDeleteUserRecord: ProcessDeleteUserRecordService,
		private __processDeleteAllUserImageFiles: ProcessDeleteAllUserImageFilesService
	) {}


	async go(email, password): Promise<{ success: true } | void> {
		await this.__processDeleteUserRecord.go(email, password); // will handle its own errors.
		if (not(alerts.includesSuccess(userRecordDeleted))) return;

		await this.__processDeleteAllUserImageFiles.go(email); // will handle its own errors.
		return {success: true};
	}

}
