import { batchDoesntExist } from '@string-constants/rest-api-errors';
import { HandleDataTransportProcessErrorService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/handle-data-transport-process-error/handle-data-transport-process-error.service';
import { ImageTotalData as imageTotal, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class HandleGetImagesErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		loadedImages.data = [];
		imageTotal.data = 0;

		if (not(error.message.includes(batchDoesntExist))) await super.go(error);
	}

}
