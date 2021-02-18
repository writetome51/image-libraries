import { batchDoesntExist } from '@string-constants/mongo-db-realm-function-errors';
import { ImageTotalData as imageTotal, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { HandleDataTransportErrorService }
	from '@data-transport-processor/interpret-data-transport-result/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: 'root'})
export class HandleGetImagesErrorService extends HandleDataTransportErrorService {

	async go(error) {
		loadedImages.data = [];
		imageTotal.setDefault();
		console.log('error: ', error); // temp
		if (not(error.message.includes(batchDoesntExist))) await super.go(error);
	}

}
