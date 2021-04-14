import { AlertService as alert } from '@services/alert.service';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { libraryAlreadyExists } from '@string-constants/form-submission-errors';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleUpdateOrNewLibraryErrorService implements IDoThis {

	constructor(private __handleDbOperationError: HandleExistingUserDBOperationErrorService) {}


	async go(error) {
		if (error.message.includes(duplicate)) alert.setError(libraryAlreadyExists);
		else await this.__handleDbOperationError.go(error);
	}

}
