import { Injectable } from '@angular/core';
import { AlertsService as alerts } from '@services/alerts.service';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { AddImagesServicesModule } from '../../add-images-services.module';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';
import { newImagesSaved } from '@string-constants/alert-success-messages';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';


@Injectable({providedIn: AddImagesServicesModule})
export class RunTasksAfterSavingNewImageRecordsService implements IDoThis {

	constructor(
		private __userImageTotal: UserImageTotalInBrowserStorageService,
		private __loadedImagesState: LoadedImagesStateService
	) {}


	go() {
		this.__emptyImageDataSoItWillBeForcedToRefresh();
		alerts.setSuccess(newImagesSaved);
	}


	private __emptyImageDataSoItWillBeForcedToRefresh() {
		newImages.setDefault();
		this.__userImageTotal.remove();
		this.__loadedImagesState.setDefault();
	}

}
