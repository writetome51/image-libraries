import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { libraryAlreadyExists }	from '../../../../string-constants/form-submission-errors';
import { duplicate } from '../../../../string-constants/rest-api-errors';


@Injectable({providedIn: 'root'})

export class UpdateOrNewLibraryResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = libraryAlreadyExists;
		else await super._errorHandler(errMessage);
	}

}
