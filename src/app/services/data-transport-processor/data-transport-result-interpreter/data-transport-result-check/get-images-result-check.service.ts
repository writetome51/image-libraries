import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { batchDoesntExist } from '../../../../string-constants/rest-api-errors';
import { LoadedImagesData as loadedImages }
	from '../../../../data/runtime-state-data/static-classes/loaded-images.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		loadedImages.data = {};

		if (not(errMessage.includes(batchDoesntExist))) await super._errorHandler(errMessage);
	}

}
