import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';
import { CurrentRouteService } from '@services/current-route.service';
import { Router } from '@angular/router';


@Injectable()
export class RunTasksAfterDeletingImagesService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService,
		private __currentRoute: CurrentRouteService,
		private __router: Router,

	) {
	}


	async go() {
		selectedImageNames.data.length = 0;
		alert.success = 'Image(s) deleted';
		this.__runTasksAfterModifyingLoadedImages.go();
		await this.__router.navigate([this.__currentRoute.data]);
	}

}
