import { Injectable } from '@angular/core';
import { AlertsService as alerts } from '@services/alerts.service';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { AddImagesServicesModule } from '../add-images-services.module';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: AddImagesServicesModule})
export class RunTasksAfterSavingNewImageRecordsService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService,
		private __userImageTotal: UserImageTotalInBrowserStorageService
	) {}

	go() {
		alerts.setSuccess('New images saved');
		this.__emptyImageDataSoItWillBeForcedToRefresh();
	}


	private __emptyImageDataSoItWillBeForcedToRefresh() {
		newImages.setDefault();
		this.__userImageTotal.remove();
		this.__runTasksAfterModifyingLoadedImages.go();
	}

}
