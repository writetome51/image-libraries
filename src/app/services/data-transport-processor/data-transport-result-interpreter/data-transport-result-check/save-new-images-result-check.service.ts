import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { duplicate, sizeRequirement } from '../../../../../string-constants/rest-api-errors';
import { imageWithSameNameAlreadyExists, imageSizeLimitExceeded }
	from '../../../../../string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = imageWithSameNameAlreadyExists;

		else if (errMessage.includes(sizeRequirement)) alert.error = imageSizeLimitExceeded;

		else await super._errorHandler(errMessage);
	}

}
