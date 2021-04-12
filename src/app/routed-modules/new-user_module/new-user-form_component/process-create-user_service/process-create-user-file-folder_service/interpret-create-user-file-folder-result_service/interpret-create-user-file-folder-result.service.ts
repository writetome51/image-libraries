import { Injectable } from '@angular/core';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { RunTasksAfterCreatingUserFileFolderService }
	from './run-tasks-after-creating-user-file-folder.service';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { HandleErrorService } from '@process/handle-error/handle-error.service';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserFileFolderResultService extends InterpretResultService {

	constructor(
		__handleError: HandleErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingUserFileFolderService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
