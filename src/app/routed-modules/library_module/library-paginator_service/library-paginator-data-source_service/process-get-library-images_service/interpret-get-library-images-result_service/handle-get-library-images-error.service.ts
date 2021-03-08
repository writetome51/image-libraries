import { Injectable } from '@angular/core';
import { libraryNotFound } from '@string-constants/mongo-db-realm-function-errors';
import { not } from '@writetome51/not';
import { LibraryServicesModule } from '../../../../library-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { HandleNoRecordMatchErrorService } from '@handle-db-operation-error_service/handle-no-record-match-error.service';
import { HandleNotLoggedInErrorService } from '@handle-db-operation-error_service/handle-not-logged-in-error.service';
import { LoadedImageStateService } from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: LibraryServicesModule})
export class HandleGetLibraryImagesErrorService extends HandleDbOperationErrorService {

	constructor(
		private __loadedImageState: LoadedImageStateService,
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
