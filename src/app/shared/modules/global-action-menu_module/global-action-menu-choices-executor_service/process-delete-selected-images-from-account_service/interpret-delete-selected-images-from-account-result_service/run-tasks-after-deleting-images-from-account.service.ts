import { AlertsService as alerts } from '@services/alerts.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageSelectorService } from '@services/image-selector.service';
import { Injectable } from '@angular/core';
import { ReloadCurrentPageDataWithCurrentPaginatorService }
	from '@services/reload-current-page-data-with-current-paginator_service/reload-current-page-data-with-current-paginator.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RunTasksAfterDeletingImagesFromAccountService implements IDoThis {

	constructor(
		private __reloadCurrentPageData: ReloadCurrentPageDataWithCurrentPaginatorService,
		private __imageSelector: ImageSelectorService
	) {}


	async go() {
		alerts.setSuccess('Image(s) deleted');

		this.__imageSelector.unselectAll();
		await this.__reloadCurrentPageData.go();
	}

}
