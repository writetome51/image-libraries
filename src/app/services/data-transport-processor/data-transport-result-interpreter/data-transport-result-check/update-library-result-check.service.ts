import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { libraryAlreadyExists, sizeLimitExceeded }
	from '../../../../string-constants/form-submission-errors';
import { duplicateLibrary, sizeRequirement } from '../../../../string-constants/api-errors';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultCheckService extends DataTransportResultCheckService {

	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateLibrary)) alert.error = libraryAlreadyExists;

		else if (errMessage.includes(sizeRequirement)) alert.error = sizeLimitExceeded;

		else super._errorHandler(errMessage);
	}

}
