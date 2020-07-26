import { batchDoesntExist } from '@string-constants/rest-api-errors';
import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../../data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { ImageTotalData as imageTotal, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		loadedImages.data = [];
		imageTotal.data = 0;

		if (not(errMessage.includes(batchDoesntExist))) await super._errorHandler(errMessage);
	}

}
