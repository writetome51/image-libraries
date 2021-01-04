import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterSavingNewImagesService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService
	) {
	}

	go() {
		alert.success = 'New images saved';
		newImages.data = [];
		this.__runTasksAfterModifyingLoadedImages.go();
	}

}
