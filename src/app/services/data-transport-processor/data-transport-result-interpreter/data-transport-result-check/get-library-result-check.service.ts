import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { libraryNotFound } from '../../../../string-constants/rest-api-errors';
import { LoadedLibraryData as library } from '../../../../data/runtime-state-data/loaded-library.data';
import { LoadedImagesData as libraryImages }
	from '../../../../data/runtime-state-data/loaded-images.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetLibraryResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		// If library retrieval unsuccessful, library data must be undefined.
		library.data = undefined;
		libraryImages.data = undefined;

		if (not(errMessage.includes(libraryNotFound))) await super._errorHandler(errMessage);
	}

}
