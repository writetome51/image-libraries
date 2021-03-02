import { AddImagesServicesModule } from '../add-images-services.module';
import { HandleSaveNewImagesErrorService } from './handle-save-new-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImagesService } from './run-tasks-after-saving-new-images.service';
import { InterpretDataTransportResultService }
	from '@services/process-related/interpret-data-transport-result.service';


@Injectable({providedIn: AddImagesServicesModule})
export class InterpretSaveNewImagesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleSaveNewImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
