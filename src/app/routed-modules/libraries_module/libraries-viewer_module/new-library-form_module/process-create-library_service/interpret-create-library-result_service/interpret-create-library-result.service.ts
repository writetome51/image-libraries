import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewLibraryService }
	from './run-tasks-after-creating-new-library.service';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';
import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-error/handle-update-or-new-library-error.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class InterpretCreateLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
