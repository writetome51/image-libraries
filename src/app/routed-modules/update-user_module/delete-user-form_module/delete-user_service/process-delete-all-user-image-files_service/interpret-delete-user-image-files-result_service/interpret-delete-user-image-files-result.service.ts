import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingUserImageFilesService }
	from './run-tasks-after-deleting-user-image-files.service';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { HandleErrorService } from '@handle-error/handle-error.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretDeleteUserImageFilesResultService extends InterpretResultService {

	constructor(
		__handleError: HandleErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserImageFilesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
