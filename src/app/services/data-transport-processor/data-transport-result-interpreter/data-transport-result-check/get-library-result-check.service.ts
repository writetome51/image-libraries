import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { libraryNotFound } from '../../../../string-constants/rest-api-errors';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
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
