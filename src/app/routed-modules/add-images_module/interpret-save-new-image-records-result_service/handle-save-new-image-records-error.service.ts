import { AlertsService as alerts } from '@services/alerts.service';
import { duplicate, sizeRequirement } from '@string-constants/mongo-db-realm-function-errors';
import { imageWithSameNameAlreadyExists, imageSizeLimitExceeded }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';
import { AddImagesServicesModule } from '../add-images-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: AddImagesServicesModule})
export class HandleSaveNewImageRecordsErrorService
	extends HandleExistingUserDBOperationErrorService {

	async go(error: {message: string}) {
		if (error.message.includes(duplicate)) alerts.setError(imageWithSameNameAlreadyExists);

		else if (error.message.includes(sizeRequirement)) alerts.setError(imageSizeLimitExceeded);

		else await super.go(error);
	}

}
