import { AlertsService as alerts } from '@services/alerts.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageSelectorService } from '@services/image-selector.service';
import { Injectable } from '@angular/core';
import { ReloadCurrentPageDataService }
	from '@services/reload-current-page-data_service/reload-current-page-data.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RunTasksAfterDeletingImagesFromAccountService implements IDoThis {

	constructor(
		private __reloadCurrentPageData: ReloadCurrentPageDataService,
		private __imageSelector: ImageSelectorService
	) {}


	async go() {
		alerts.setSuccess('Image(s) deleted');

		this.__imageSelector.unselectAll();
		await this.__reloadCurrentPageData.go();
	}

}
