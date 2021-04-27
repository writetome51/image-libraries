import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';
import { AlertService as alert } from '@services/alert.service';
import { imageFilesDeleted } from '@string-constants/alert-success-messages';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserImageFilesService implements IDoThis {

	async go(result) {
		console.log('Delete user files result:');
		console.log(result);
		alert.setSuccess(imageFilesDeleted);
	}

}
