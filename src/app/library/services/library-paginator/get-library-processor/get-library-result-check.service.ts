import { Injectable } from '@angular/core';
import { DataTransportResultCheckService }
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { libraryNotFound } from '../../../../../string-constants/rest-api-errors';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/loaded-images.data';
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
