import { AllImagesPaginatorService } from '../all-images-paginator/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { AllImagesRouteParamsHandlerService } from './all-images-route-params-handler.service';
import { IDoThis } from '@interfaces/i-do-this';
import {
	ImagesLoadedFromData as imagesLoadedFrom, LoadedImagesData as loadedImages,
	LoadedLibraryData as loadedLibrary
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class RunTasksAfterAllImagesRouteParamsReceivedService implements IDoThis {


	constructor(
		private __paginator: AllImagesPaginatorService,
		private __jumpToPageInput: AllImagesJumpToPageInputService,
		private __routeParamsHandler: AllImagesRouteParamsHandlerService
	) {
	}


	async go(params): Promise<void> {

		if (noValue(loadedImages.data) || not(imagesLoadedFrom.all)) {
			await this.__paginator.resetToFirstPage();
			this.__jumpToPageInput.setMax();
			imagesLoadedFrom.data = 'all';
			loadedLibrary.data = undefined;
		}

		await this.__routeParamsHandler.handle(params);
	}


}
