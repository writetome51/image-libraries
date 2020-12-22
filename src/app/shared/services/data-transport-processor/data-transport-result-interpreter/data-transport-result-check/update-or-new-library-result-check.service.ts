import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { duplicate } from '@string-constants/rest-api-errors';
import { Injectable } from '@angular/core';
import { libraryAlreadyExists }	from '@string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})
export class UpdateOrNewLibraryResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = libraryAlreadyExists;
		else await super._errorHandler(errMessage);
	}

}
