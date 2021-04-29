import { Injectable } from '@angular/core';
import { libraryNotFound } from '@string-constants/mongo-db-realm-function-errors';
import { not } from '@writetome51/not';
import { LibraryServicesModule } from '../../../../library-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { HandleNoRecordMatchErrorService } from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-no-record-match-error.service';
import { HandleNotLoggedInErrorService } from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-not-logged-in-error.service';
import { LoadedImagesStateService } from '@services/loaded-image-state_service/loaded-images-state.service';


@Injectable({providedIn: LibraryServicesModule})
export class HandleGetLibraryImagesErrorService extends HandleExistingUserDBOperationErrorService {

	constructor(
		private __loadedImageState: LoadedImagesStateService,
		__handleNoRecordMatchError: HandleNoRecordMatchErrorService,
		__handleNotLoggedInError: HandleNotLoggedInErrorService
	) {
		super(__handleNoRecordMatchError, __handleNotLoggedInError);
	}


	async go(error) {
		this.__loadedImageState.setDefault();

		if (not(error.message.includes(libraryNotFound))) await super.go(error);
	}

}
