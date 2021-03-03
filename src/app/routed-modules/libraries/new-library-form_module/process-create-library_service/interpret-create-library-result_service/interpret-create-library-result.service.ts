import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewLibraryService }
	from './run-tasks-after-creating-new-library.service';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';
import { HandleUpdateOrNewLibraryErrorService }
	from '@process-related/handle-error/handle-update-or-new-library-error.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class InterpretCreateLibraryResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
