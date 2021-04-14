import { AlertService as alert } from '@services/alert.service';
import { HandleDbOperationErrorService }
	from './handle-db-operation-error_service/handle-db-operation-error.service';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { libraryAlreadyExists } from '@string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})
export class HandleUpdateOrNewLibraryErrorService {

	constructor(private __handleDbOperationError: HandleDbOperationErrorService) {}


	async go(error) {
		if (error.message.includes(duplicate)) alert.setError(libraryAlreadyExists);
		else await this.__handleDbOperationError.go(error);
	}

}
