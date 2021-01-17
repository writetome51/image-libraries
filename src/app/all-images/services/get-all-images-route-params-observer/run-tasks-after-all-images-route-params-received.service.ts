import { AllImagesPaginatorService } from '../all-images-paginator/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import {
	ImagesLoadedFromData as imagesLoadedFrom, LoadedImagesData as loadedImages,
	LoadedLibraryData as loadedLibrary
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterAllImagesRouteParamsReceivedService implements IDoThis {


	constructor(
		private __paginator: AllImagesPaginatorService,
		private __jumpToPageInput: AllImagesJumpToPageInputService
	) {
	}


	async go(params): Promise<void> {

		if (this.__allImagesNotLoaded()) {
			await this.__paginator.resetToFirstPage();
			this.__jumpToPageInput.setMax();
			this.__setImagesLoadedStatusTo_all();
		}
		await this.__handleRouteParams(params);
	}


	private __allImagesNotLoaded(): boolean {
		return noValue(loadedImages.data) || not(imagesLoadedFrom.all);
	}


	private __setImagesLoadedStatusTo_all() {
		imagesLoadedFrom.data = 'all';
		loadedLibrary.data = undefined;
	}


	private async __handleRouteParams(params) {
		let page = Number(params[paramID.pageNumber]);
		await this.__paginator.setCurrentPageNumber(page);
	}


}
