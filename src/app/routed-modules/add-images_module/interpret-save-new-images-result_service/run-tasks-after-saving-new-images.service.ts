import { Injectable } from '@angular/core';
import { AlertService as alert } from '@services/alert.service';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { AddImagesServicesModule } from '../add-images-services.module';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';


@Injectable({providedIn: AddImagesServicesModule})
export class RunTasksAfterSavingNewImagesService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService
	) {
	}

	go() {
		alert.setSuccess('New images saved');
		newImages.data = [];
		this.__runTasksAfterModifyingLoadedImages.go();
	}

}
