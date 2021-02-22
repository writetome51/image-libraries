import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { ImageActionMenuServicesModule } from '../../../../../image-action-menu-services.module';
import { HandleDataTransportErrorService }
	from '@services/processor-related/../../../../../../../services/processor/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleAddImageToLibraryErrorService extends HandleDataTransportErrorService {

	async go(errMessage) {
		console.error(errMessage);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
