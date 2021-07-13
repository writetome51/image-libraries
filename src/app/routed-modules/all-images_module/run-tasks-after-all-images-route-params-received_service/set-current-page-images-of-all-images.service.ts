import { Injectable } from '@angular/core';
import { SetCurrentPageImagesService } from '@services/set-current-page-images.service';
import { AllImagesPaginatorService }
	from '@app-paginator/all-images-paginator_service/all-images-paginator.service';


@Injectable({providedIn: 'root'})
export class SetCurrentPageImagesOfAllImagesService {

	constructor(
		private __allImagesPaginator: AllImagesPaginatorService,
		private __setCurrentPageImages: SetCurrentPageImagesService
	) {}


	async go(
		pageNum: number,
		option = {reload: false}
	): Promise<void> {

		await this.__setCurrentPageImages.go(pageNum, this.__allImagesPaginator, option);
	}

}
