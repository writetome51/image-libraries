import { AddImagesServicesModule } from '../../add-images-services.module';
import { AlertsService as alerts } from '@services/alerts.service';
import { AllImagesPaginatorService }
	from '@app-paginator/all-images-paginator_service/all-images-paginator.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { newImagesSaved } from '@string-constants/alert-success-messages';
import { SetCurrentPageImagesService as setCurrentPageImages }
	from '@services/set-current-page-images.service';


@Injectable({providedIn: AddImagesServicesModule})
export class RunTasksAfterSavingNewImageRecordsService implements IDoThis {

	constructor(private __allImagesPaginator: AllImagesPaginatorService) {}


	async go() {
		await this.refreshAllImages();
		alerts.setSuccess(newImagesSaved);
	}


	private async refreshAllImages() {
		await setCurrentPageImages.go(1, this.__allImagesPaginator, {reload: true});
	}

}
