import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { batchDoesntExist } from '../../../../string-constants/rest-api-errors';
import { LibraryImagesData as libraryImages }
	from '../../../../data/runtime-state-data/library-images.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetLibraryImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		libraryImages.data = {};

		if (not(errMessage.includes(batchDoesntExist))) await super._errorHandler(errMessage);
	}

}
