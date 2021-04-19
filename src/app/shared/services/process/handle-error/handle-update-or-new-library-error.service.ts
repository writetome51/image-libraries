import { AlertService as alert } from '@services/alert.service';
import { HandleExistingUserDBOperationErrorService }
	from './handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { libraryAlreadyExists } from '@string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})
export class HandleUpdateOrNewLibraryErrorService extends HandleExistingUserDBOperationErrorService{

	async go(error) {
		if (error.message.includes(duplicate)) alert.setError(libraryAlreadyExists);
		else await super.go(error);
	}

}
