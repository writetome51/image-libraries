import { AddImagesServicesModule } from '../add-images-services.module';
import { InterpretDataTransportResultService }
	from '@data-transport-processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { HandleSaveNewImagesErrorService } from './handle-save-new-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImagesService } from './run-tasks-after-saving-new-images.service';


@Injectable({providedIn: AddImagesServicesModule})
export class InterpretSaveNewImagesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleSaveNewImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
