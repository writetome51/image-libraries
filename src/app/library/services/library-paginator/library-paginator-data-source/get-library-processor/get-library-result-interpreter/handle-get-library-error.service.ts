import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { libraryNotFound } from '@string-constants/rest-api-errors';
import { LoadedLibraryData as loadedLibrary, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class HandleGetLibraryErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		// If library retrieval unsuccessful, library data must be undefined.
		loadedLibrary.data = undefined;
		loadedImages.data = undefined;

		if (not(error.message.includes(libraryNotFound))) await super.go(error);
	}

}
