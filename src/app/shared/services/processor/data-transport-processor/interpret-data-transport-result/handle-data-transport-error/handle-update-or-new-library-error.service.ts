import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { HandleDataTransportErrorResultService }
	from './handle-data-transport-error-result.service';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { libraryAlreadyExists }	from '@string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})
export class HandleUpdateOrNewLibraryErrorService extends HandleDataTransportErrorResultService {

	async go(error) {
		if (error.message.includes(duplicate)) alert.error = libraryAlreadyExists;
		else await super.go(error);
	}

}
