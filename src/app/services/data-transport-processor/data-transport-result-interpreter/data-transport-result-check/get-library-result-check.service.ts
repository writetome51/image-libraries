import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { libraryNotFound } from '../../../../string-constants/rest-api-errors';
import { LibraryData as library } from '../../../../data/runtime-state-data/library.data';


@Injectable({providedIn: 'root'})

export class GetLibraryResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		// If library retrieval unsuccessful, library.data must be undefined.
		library.data = undefined;

		if (errMessage.includes(libraryNotFound)) alert.error = 'Library does not exist';
		else await super._errorHandler(errMessage);
	}

}
