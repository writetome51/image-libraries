import { AddImagesServicesModule } from '../add-images-services.module';
import { HandleSaveNewImageRecordsErrorService }
	from './handle-save-new-image-records-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImageRecordsService }
	from './run-tasks-after-saving-new-image-records.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: AddImagesServicesModule})
export class InterpretSaveNewImageRecordsResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleSaveNewImageRecordsErrorService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImageRecordsService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
