import { Injectable } from '@angular/core';
import { InterpretDataTransportResultService }
	from '@services/processor-related/../../../../../shared/services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { RunTasksAfterCreatingNewLibraryService }
	from './run-tasks-after-creating-new-library.service';
import { HandleUpdateOrNewLibraryErrorService }
	from '@services/processor-related/../../../../../shared/services/processor/handle-data-transport-error/handle-update-or-new-library-error.service';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class InterpretCreateLibraryResultService
	extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
