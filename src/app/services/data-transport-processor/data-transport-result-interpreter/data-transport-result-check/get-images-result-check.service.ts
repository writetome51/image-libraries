import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { batchDoesntExist } from '../../../../../string-constants/rest-api-errors';
import { LoadedImagesData as loadedImages }
	from '../../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { not } from '@writetome51/not';
import { ImageTotalData as imageTotal }
	from '../../../../../data-structures/runtime-state-data/static-classes/image-total.data';


@Injectable({providedIn: 'root'})

export class GetImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		loadedImages.data = {};
		imageTotal.data = 0;

		if (not(errMessage.includes(batchDoesntExist))) await super._errorHandler(errMessage);
	}

}
