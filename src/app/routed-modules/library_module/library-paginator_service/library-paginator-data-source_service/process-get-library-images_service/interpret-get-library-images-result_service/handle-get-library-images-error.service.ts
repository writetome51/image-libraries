import { Injectable } from '@angular/core';
import { libraryNotFound } from '@string-constants/mongo-db-realm-function-errors';
import { LoadedLibraryData as loadedLibrary, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { not } from '@writetome51/not';
import { LibraryServicesModule } from '@app/routed-modules/library_module/library-services.module';
import { HandleDbOperationErrorService }
	from '@services/process/handle-error/handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: LibraryServicesModule})
export class HandleGetLibraryImagesErrorService extends HandleDbOperationErrorService {

	async go(error) {
		// If library retrieval unsuccessful, library data must be undefined.
		loadedLibrary.data = undefined;
		loadedImages.data = undefined;

		if (not(error.message.includes(libraryNotFound))) await super.go(error);
	}

}
