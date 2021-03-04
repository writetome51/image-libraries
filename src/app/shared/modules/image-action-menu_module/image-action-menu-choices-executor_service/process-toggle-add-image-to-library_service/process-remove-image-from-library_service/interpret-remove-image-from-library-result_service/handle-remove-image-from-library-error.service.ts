import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleRemoveImageFromLibraryErrorService extends HandleDbOperationErrorService {

	async go(errMessage) {
		console.error(errMessage);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
