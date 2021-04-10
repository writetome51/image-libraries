import { HandleCreateUserFileFolderErrorService } from './handle-create-user-file-folder-error.service';
import { Injectable } from '@angular/core';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { RunTasksAfterCreatingUserFileFolderService }
	from './run-tasks-after-creating-user-file-folder.service';
import { NewUserServicesModule } from '../../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserFileFolderResultService extends InterpretResultService {

	constructor(
		__handleError: HandleCreateUserFileFolderErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingUserFileFolderService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
