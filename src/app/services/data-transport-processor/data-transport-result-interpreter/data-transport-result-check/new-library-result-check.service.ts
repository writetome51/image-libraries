import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { libraryAlreadyExists } from '../../../../string-constants/form-submission-errors';
import { duplicateLibrary } from '../../../../string-constants/api-errors';


@Injectable({providedIn: 'root'})

export class NewLibraryResultCheckService extends DataTransportResultCheckService {

	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateLibrary)) alert.error = libraryAlreadyExists;
		else super._errorHandler(errMessage);
	}

}
