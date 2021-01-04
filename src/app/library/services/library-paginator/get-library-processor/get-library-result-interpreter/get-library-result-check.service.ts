import { HandleDataTransportProcessErrorService }
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { libraryNotFound } from '@string-constants/rest-api-errors';
import { LoadedLibraryData as loadedLibrary, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class GetLibraryResultCheckService extends HandleDataTransportProcessErrorService {

	async go(errMessage) {
		// If library retrieval unsuccessful, library data must be undefined.
		loadedLibrary.data = undefined;
		loadedImages.data = undefined;

		if (not(errMessage.includes(libraryNotFound))) await super.go(errMessage);
	}

}
