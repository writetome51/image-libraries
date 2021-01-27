import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { duplicate, sizeRequirement } from '@string-constants/mongo-db-realm-function-errors';
import { imageWithSameNameAlreadyExists, imageSizeLimitExceeded }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class HandleSaveNewImagesErrorService extends HandleDataTransportProcessErrorService {

	async go(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = imageWithSameNameAlreadyExists;

		else if (errMessage.includes(sizeRequirement)) alert.error = imageSizeLimitExceeded;

		else await super.go(errMessage);
	}

}
