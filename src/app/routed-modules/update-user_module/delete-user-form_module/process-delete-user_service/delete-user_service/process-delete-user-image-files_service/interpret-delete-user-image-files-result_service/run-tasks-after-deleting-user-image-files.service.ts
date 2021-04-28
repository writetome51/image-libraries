import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../../../update-user-services.module';
import { AlertsService as alerts } from '@services/alerts.service';
import { imageFilesDeleted } from '@string-constants/alert-success-messages';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserImageFilesService implements IDoThis {

	async go() {
		alerts.setSuccess(imageFilesDeleted);
	}

}
