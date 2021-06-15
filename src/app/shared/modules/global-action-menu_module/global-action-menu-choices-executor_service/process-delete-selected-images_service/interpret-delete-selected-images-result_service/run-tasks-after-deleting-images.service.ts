import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';
import { ImageSelectorService } from '@services/image-selector.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RunTasksAfterDeletingImagesService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService,
		private __imageSelector: ImageSelectorService
	) {}


	async go() {
		await this.__runTasksAfterModifyingLoadedImages.go();
		this.__imageSelector.unselectAll();

		alerts.setSuccess('Image(s) deleted');
	}

}
