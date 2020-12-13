import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class AddImageToLibraryResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		console.error(errMessage);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super._errorHandler(errMessage);
	}

}
