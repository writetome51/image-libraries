import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { ImageActionMenuServicesModule } from '@thumbnail-image-container/image-action-menu_module/image-action-menu-services.module';
import { HandleDataTransportErrorService } from '@data-transport-processor/interpret-data-transport-result/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class HandleRemoveImageFromLibraryErrorService
	extends HandleDataTransportErrorService {

	async go(errMessage) {
		console.error(errMessage);

		// if (errMessage.includes()) alert.error = 'Library update unsuccessful';
		// else await super.go(errMessage);
	}

}
