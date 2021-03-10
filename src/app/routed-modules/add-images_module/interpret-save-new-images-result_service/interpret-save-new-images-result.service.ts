import { AddImagesServicesModule } from '../add-images-services.module';
import { HandleSaveNewImagesErrorService } from './handle-save-new-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImagesToAccountService } from './run-tasks-after-saving-new-images-to-account.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: AddImagesServicesModule})
export class InterpretSaveNewImagesResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleSaveNewImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImagesToAccountService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
