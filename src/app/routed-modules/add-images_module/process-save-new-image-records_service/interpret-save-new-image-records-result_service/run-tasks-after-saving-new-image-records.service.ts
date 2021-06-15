import { AddImagesServicesModule } from '../../add-images-services.module';
import { AlertsService as alerts } from '@services/alerts.service';
import { AllImagesPaginatorService }
	from '@app-paginator/all-images-paginator_service/all-images-paginator.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { newImagesSaved } from '@string-constants/alert-success-messages';


@Injectable({providedIn: AddImagesServicesModule})
export class RunTasksAfterSavingNewImageRecordsService implements IDoThis {

	constructor(private __allImagesPaginator: AllImagesPaginatorService) {}


	async go() {
		await this.refreshAllImages();
		alerts.setSuccess(newImagesSaved);
	}


	private async refreshAllImages() {
		await this.__allImagesPaginator.setCurrentPageNumber(1, {reload: true});
	}

}
