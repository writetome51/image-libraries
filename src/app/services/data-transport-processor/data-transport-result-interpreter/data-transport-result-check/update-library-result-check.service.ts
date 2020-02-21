import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { libraryAlreadyExists }	from '../../../../string-constants/form-submission-errors';
import { duplicate } from '../../../../string-constants/api-errors';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultCheckService extends DataTransportResultCheckService {

	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = libraryAlreadyExists;

		else super._errorHandler(errMessage);
	}

}
