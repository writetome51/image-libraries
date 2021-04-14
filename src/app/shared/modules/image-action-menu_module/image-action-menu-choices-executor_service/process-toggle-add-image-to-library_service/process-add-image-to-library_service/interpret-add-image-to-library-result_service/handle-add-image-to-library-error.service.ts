import { Injectable } from '@angular/core';
import { AlertService as alert } from '@services/alert.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleAddImageToLibraryErrorService extends HandleExistingUserDBOperationErrorService {

	async go(error: {message: string}) {
		console.error(error.message);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
