import { AlertService as alert } from '@services/alert.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { imageFilesDeleted, userRecordDeleted } from '@string-constants/alert-success-messages';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ProcessDeleteUserRecordService }
	from './process-delete-user-record_service/process-delete-user-record.service';
import { ProcessDeleteUserImageFilesService }
	from './process-delete-user-image-files_service/process-delete-user-image-files.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserService implements IDoThis {

	constructor(
		private __processDeleteUserRecord: ProcessDeleteUserRecordService,
		private __processDeleteUserImageFiles: ProcessDeleteUserImageFilesService
	) {}


	async go(): Promise<{ success: true } | void> {
		await this.__processDeleteUserRecord.go();
		// if unsuccessful, this.__processDeleteUserRecord will handle errors.
		if (not(alert.success === userRecordDeleted)) return;

		await this.__processDeleteUserImageFiles.go();
		// if unsuccessful, this.__processDeleteUserImageFiles will handle errors.
		if (not(alert.success === imageFilesDeleted)) return;

		return {success: true};
	}

}
