import { AllImagesPaginatorService } from '../all-images-paginator/all-images-paginator.service';
import { AllImagesJumpToPageNumberInputService } from '../all-images-jump-to-page-number-input.service';
import { AllImagesRouteParamsHandlerService } from './all-images-route-params-handler.service';
import { IDoThis } from '../../../../interfaces/i-do-this';
import { ImagesLoadedFromData as imagesLoadedFrom }
	from '../../../../data-structures/runtime-state-data/static-classes/images-loaded-from.data';
import { Injectable } from '@angular/core';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterAllImagesRouteParamsReceivedService implements IDoThis {


	constructor(
		private __allImagesPaginator: AllImagesPaginatorService,
		private __allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService,
		private __routeParamsHandler: AllImagesRouteParamsHandlerService
	) {
	}


	async go(params): Promise<void> {

		if (noValue(loadedImages.data) || not(imagesLoadedFrom.data === 'all')) {
			await this.__allImagesPaginator.resetToFirstPage();
			this.__allImagesJumpToPageNumberInput.setMax();
			imagesLoadedFrom.data = 'all';
			loadedLibrary.data = undefined;
		}

		await this.__routeParamsHandler.handle(params);
	}


}
