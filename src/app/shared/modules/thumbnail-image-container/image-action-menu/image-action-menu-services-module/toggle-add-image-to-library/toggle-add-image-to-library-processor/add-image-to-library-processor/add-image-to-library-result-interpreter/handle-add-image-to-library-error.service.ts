import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleAddImageToLibraryErrorService extends HandleDataTransportProcessErrorService {

	async go(errMessage) {
		console.error(errMessage);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
