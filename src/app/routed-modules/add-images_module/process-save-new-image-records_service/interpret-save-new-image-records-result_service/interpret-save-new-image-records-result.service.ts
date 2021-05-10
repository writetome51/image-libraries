import { AddImagesServicesModule } from '../../add-images-services.module';
import { HandleSaveNewImageRecordsErrorService }
	from './handle-save-new-image-records-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImageRecordsService }
	from './run-tasks-after-saving-new-image-records.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: AddImagesServicesModule})
export class InterpretSaveNewImageRecordsResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleSaveNewImageRecordsErrorService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImageRecordsService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
