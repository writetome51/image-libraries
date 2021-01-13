import { batchDoesntExist } from '@string-constants/rest-api-errors';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { ImageTotalData as imageTotal, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class HandleGetImagesErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		loadedImages.data = [];
		imageTotal.setDefault();
		console.log('error: ', error);
		if (not(error.message.includes(batchDoesntExist))) await super.go(error);
	}

}
