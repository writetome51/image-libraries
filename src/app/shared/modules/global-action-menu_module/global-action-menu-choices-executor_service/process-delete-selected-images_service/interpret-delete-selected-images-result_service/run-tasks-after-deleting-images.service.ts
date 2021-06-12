import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RunTasksAfterDeletingImagesService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService
	) {}


	async go() {
		selectedImages.data.length = 0;
		await this.__runTasksAfterModifyingLoadedImages.go();

		alerts.setSuccess('Image(s) deleted');
	}

}
