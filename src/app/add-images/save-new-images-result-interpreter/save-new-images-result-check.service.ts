import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { duplicate, sizeRequirement } from '@string-constants/rest-api-errors';
import { imageWithSameNameAlreadyExists, imageSizeLimitExceeded }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class SaveNewImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = imageWithSameNameAlreadyExists;

		else if (errMessage.includes(sizeRequirement)) alert.error = imageSizeLimitExceeded;

		else await super._errorHandler(errMessage);
	}

}
