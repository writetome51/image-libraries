import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { ReloadCurrentPageDataService }
	from '@services/reload-current-page-data.service';
import { ImageSelectorService } from '@services/image-selector.service';


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
