import { Injectable } from '@angular/core';
import { AlertService as alert } from '@services/alert.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleAddImageToLibraryErrorService extends HandleDbOperationErrorService {

	async go(error: {message: string}) {
		console.error(error.message);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
