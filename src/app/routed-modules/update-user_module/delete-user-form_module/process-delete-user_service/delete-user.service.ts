import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { ProcessDeleteUserRecordService }
	from './process-delete-user-record/process-delete-user-record.service';
import { ProcessDeleteUserImageFilesService }
	from './process-delete-user-image-files/process-delete-user-image-files.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserService implements IDoThis {

	constructor(
		private __processDeleteUserRecord: ProcessDeleteUserRecordService,
		private __processDeleteUserImageFiles: ProcessDeleteUserImageFilesService
	) {}


	async go(): Promise<{ success: true } | HasError> {
		try{
			await this.__processDeleteUserRecord.go();
			await this.__processDeleteUserImageFiles.go();
		}
		catch (error) { return {error}; }

		return {success: true};
	}

}
