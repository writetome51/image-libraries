import { AlertService as alert } from '@services/alert.service';
import { duplicate, sizeRequirement } from '@string-constants/mongo-db-realm-function-errors';
import { imageWithSameNameAlreadyExists, imageSizeLimitExceeded }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';
import { AddImagesServicesModule } from '../add-images-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: AddImagesServicesModule})
export class HandleSaveNewImagesErrorService extends HandleDbOperationErrorService {

	async go(errMessage) {
		if (errMessage.includes(duplicate)) alert.setError(imageWithSameNameAlreadyExists);

		else if (errMessage.includes(sizeRequirement)) alert.setError(imageSizeLimitExceeded);

		else await super.go(errMessage);
	}

}
