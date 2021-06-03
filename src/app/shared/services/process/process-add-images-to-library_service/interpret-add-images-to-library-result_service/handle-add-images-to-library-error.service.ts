import { Injectable } from '@angular/core';
import { AlertsService as alerts } from '@services/alerts.service';
import { HandleExistingUserDBOperationErrorService }
	from '@handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: 'root'})
export class HandleAddImagesToLibraryErrorService
	extends HandleExistingUserDBOperationErrorService {

	async go(error: {message: string}) {

		// if (error.message.includes()) alert.error = 'Library update unsuccessful';
		await super.go(error);
	}

}
