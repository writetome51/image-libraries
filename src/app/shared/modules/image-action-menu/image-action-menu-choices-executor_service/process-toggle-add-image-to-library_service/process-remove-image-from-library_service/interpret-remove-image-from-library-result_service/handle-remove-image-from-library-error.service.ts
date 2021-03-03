import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { ImageActionMenuServicesModule } from '@app/shared/modules/image-action-menu/image-action-menu-services.module';
import { HandleDbOperationErrorService } from '@process-related/handle-error/handle-db-operation-error/handle-db-operation-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleRemoveImageFromLibraryErrorService extends HandleDbOperationErrorService {

	async go(errMessage) {
		console.error(errMessage);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
