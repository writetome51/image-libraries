import { Alert } from '@interfaces/alert.interface';
import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ProcessDeleteUserRecordService }
	from './process-delete-user-record_service/process-delete-user-record.service';
import { ProcessDeleteUserImageFilesService }
	from './process-delete-user-image-files_service/process-delete-user-image-files.service';
import { userRecordDeleted } from '@string-constants/alert-success-messages';
import { UpdateUserServicesModule } from '../../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserService implements IDoThis {

	constructor(
		private __processDeleteUserRecord: ProcessDeleteUserRecordService,
		private __processDeleteUserImageFiles: ProcessDeleteUserImageFilesService
	) {}


	async go(): Promise<{ success: true } | void> {
		await this.__processDeleteUserRecord.go(); // will handle its own errors.
		if (not(this.__alertsIncludeSuccess(userRecordDeleted))) return;

		await this.__processDeleteUserImageFiles.go(); // will handle its own errors.
		return {success: true};
	}


	private __alertsIncludeSuccess(message: string): boolean {
		return this.__alertsIncludesMatch(
			(alert) => not(alert.isError) && (alert.message === message)
		);
	}


	private __alertsIncludesMatch(test: (alert: Alert) => boolean) {
		for (let i = 0, length = alerts.count; i < length; ++i) {
			if (test(alerts.getAlert(i))) return true;
		}
		return false;
	}

}
