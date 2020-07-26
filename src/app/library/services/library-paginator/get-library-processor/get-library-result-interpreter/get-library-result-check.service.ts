import { Injectable } from '@angular/core';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { libraryNotFound } from '@shared/string-constants/rest-api-errors';
import { LoadedLibraryData as loadedLibrary, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetLibraryResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		// If library retrieval unsuccessful, library data must be undefined.
		loadedLibrary.data = undefined;
		loadedImages.data = undefined;

		if (not(errMessage.includes(libraryNotFound))) await super._errorHandler(errMessage);
	}

}
